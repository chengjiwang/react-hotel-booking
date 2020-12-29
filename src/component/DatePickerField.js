import React from "react";
import PropTypes from 'prop-types';
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from 'date-fns';

const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <DatePicker
      {...field}
      {...props}
      autoComplete="off"
      dateFormat="yyyy/MM/dd"
      minDate={addDays(new Date(), 1)} 
      maxDate={addDays(new Date(), 90)}
      selected={(field.value && new Date(field.value)) || null}
      onChange={val => {
        setFieldValue(field.name, val);
      }}
    />
  );
};

DatePickerField.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  excludeDates: PropTypes.array,
};

export default DatePickerField;