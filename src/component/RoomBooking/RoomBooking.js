import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { eachDayOfInterval, format , parseISO } from 'date-fns';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addBooking, clearBooking } from 'slice/roomsSlice';
import DatePickerField from 'component/DatePickerField';
import './roomBooking.scss';

const RoomBooking = ({ booking, roomId }) => {
  const [initialValues] = useState({
    name: '',
    tel: '',
    startDate: '',
    endDate: ''
  });
  const dispatch = useDispatch();

  const getDateInterval = ({ startDate, endDate })=> {
    return eachDayOfInterval({
      start: new Date(startDate),
      end: new Date(endDate)
    }).map(date => format(new Date(date), 'yyyy-MM-dd'));
  };

  const disabledDates = () => {
    return booking.map(item => parseISO(item.date));
  };
  
  const clearReservation = (e) => {
    e.preventDefault();
    dispatch(clearBooking())
      .then(unwrapResult)
      .then(() => {
        toast.success("清除預約成功");
      })
      .catch((err) => {
        toast.error("清除預約失敗");
      });
  }
  const formSchema = Yup.object({
    name: Yup.string()
      .required('此欄位為必填'),
    tel: Yup.number()
      .required('此欄位為必填'),
    startDate: Yup.date()
      .required('此欄位為必填'),
    endDate: Yup.date()
      .min(
        Yup.ref('startDate'),
        '退房日期不能早於入住日期'
      ).required('此欄位為必填')
  });
  const handleSubmit = (values, { resetForm }) =>{
    const data = {
      name: values.name,
      tel: values.tel,
      date: getDateInterval(values)
    };
    dispatch(addBooking({ roomId, data }))
      .then(unwrapResult)
      .then(() => {
        resetForm();
        toast.success("預約成功");
      })        
      .catch(err => {
        toast.error(err.message);
      });
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formSchema}
      onSubmit={handleSubmit}
    >
      { formik => (
        <div>
          <h2 className="text-left mb-4">預約時段</h2>
          <Form className="reservation">
            <label htmlFor="name" className="form-group mt-3">姓名</label>
            <Field id="name" name="name" type="text" className="form-control" />
            <ErrorMessage name="name">
              { (msg) => <div className="form-text text-danger text-left">{msg}</div> }
            </ErrorMessage> 

            <label htmlFor="phone" className="form-group mt-3">電話</label>
            <Field id="phone" name="tel" type="number" className="form-control" />
            <ErrorMessage name="tel">
              { (msg) => <div className="form-text text-danger text-left">{msg}</div> }
            </ErrorMessage>

            <label htmlFor="startDate" className="form-group mt-3">入住日期</label>
            <DatePickerField
              id="startDate" 
              name="startDate" 
              className="form-control"         
              excludeDates={disabledDates()}
            />
            <ErrorMessage name="startDate">
              { (msg) => <div className="form-text text-danger text-left">{msg}</div> }
            </ErrorMessage>

            <label htmlFor="endDate" className="form-group mt-3">退房日期</label>
            <DatePickerField
              id="endDate" 
              name="endDate" 
              className="form-control"
              excludeDates={disabledDates()}
            />
            <ErrorMessage name="endDate">
              { (msg) => <div className="form-text text-danger text-left">{msg}</div> }
            </ErrorMessage>
          
            <div className="text-right mt-3">
              <button type="btn" className="btn btn-outline-secondary" onClick={clearReservation} >清除所有預約</button>
              <button type="submit" className="btn btn-primary ml-3">預約</button>
            </div>
            <ToastContainer position="bottom-right"/>
          </Form>
        </div>
      )}
    </Formik>
  );
};

RoomBooking.propTypes = {
  booking: PropTypes.array,
  roomId: PropTypes.string
};

export default RoomBooking;