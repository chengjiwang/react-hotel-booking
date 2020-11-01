import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { eachDayOfInterval, format , parseISO} from 'date-fns';
import DatePickerField from 'component/DatePickerField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiBookingRoom, apiClearReservation } from 'services/EventService';
import './roomBooking.scss';

class RoomBooking extends Component {
  state = {
    disableDate: []
  };
  getDateInterval = ({startDate, endDate})=> {
    return eachDayOfInterval({
      start: new Date(startDate),
      end: new Date(endDate)
    }).map(date => format(new Date(date), 'yyyy-MM-dd'));
  };
  disabledDates = () => {
    return this.props.booking.map(item => parseISO(item.date));
  };
  clearReservation = (e) => {
    e.preventDefault();
    const {roomId, updateRoom} = this.props;
    apiClearReservation().then(res => {
      if (res.data.success) {
        toast.success("清除預約成功");
        updateRoom(roomId);
      }
    });
  }
  render() {
    return (
      <Formik
        initialValues={{
          name: '',
          tel: '',
          startDate: '',
          endDate: ''
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required('此欄位為必填'),
          tel: Yup.string()
            .required('此欄位為必填'),
          startDate: Yup.string()
            .required('此欄位為必填'),
          endDate: Yup.string()
            .required('此欄位為必填')
        })}
        onSubmit={(values, { resetForm }) => {
          const {roomId, updateRoom} = this.props;
          const data = {
            name: values.name,
            tel: values.tel,
            date: this.getDateInterval(values)
          }
          apiBookingRoom(roomId, data).then(()=> {
            resetForm();
            updateRoom(roomId);
            toast.success("預約成功");
          }).catch(error => {        
            toast.error(error.response.data.message);
          });
        }}
      >
        { formik => (
          <div>
            <h2 className="text-left mb-4">預約時段</h2>
            <Form className="reservation">
              <label htmlFor="name" className="form-group mt-3">姓名</label>
              <Field id="name" name="name"  type="text" className="form-control" />
              <ErrorMessage name="name">
                { (msg) => <div className="form-text text-danger text-left">{msg}</div> }
              </ErrorMessage> 

              <label htmlFor="phone" className="form-group mt-3">電話</label>
              <Field id="phone" name="tel"  type="number" className="form-control" />
              <ErrorMessage name="tel">
                { (msg) => <div className="form-text text-danger text-left">{msg}</div> }
              </ErrorMessage>

              <label htmlFor="startDate" className="form-group mt-3">入住日期</label>
              <DatePickerField
                id="startDate" 
                name="startDate" 
                className="form-control"         
                excludeDates={this.disabledDates()}
              />
              <ErrorMessage name="startDate">
                { (msg) => <div className="form-text text-danger text-left">{msg}</div> }
              </ErrorMessage>

              <label htmlFor="endDate" className="form-group mt-3">退房日期</label>
              <DatePickerField
                id="endDate" 
                name="endDate" 
                className="form-control"
                excludeDates={this.disabledDates()}
              />
              <ErrorMessage name="endDate">
                { (msg) => <div className="form-text text-danger text-left">{msg}</div> }
              </ErrorMessage>
            
              <div className="text-right mt-3">
                <button type="btn" className="btn btn-outline-secondary" onClick={this.clearReservation} >清除所有預約</button>
                <button type="submit" className="btn btn-primary ml-3">預約</button>
              </div>
              <ToastContainer position="bottom-right"/>
            </Form>
          </div>
        )}
      </Formik>
    );
  }
};

export default RoomBooking;