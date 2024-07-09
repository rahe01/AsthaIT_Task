import  { useState } from 'react';
import DateOfBirth from './DateOfBirth';
import Gender from './Gender';
import { RxCross2 } from "react-icons/rx";
const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    emailOrPhone: '',
    password: '',
    dateOfBirth: { day: '', month: '', year: '' },
    gender: '',
  });

  const [errors, setErrors] = useState({
    dateError: '',
    genderError: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, dateOfBirth: date });
    validateDate(date);
  };

  const handleGenderChange = (e) => {
    setFormData({ ...formData, gender: e.target.value });
    validateGender(e.target.value);
  };

  const validateDate = (date) => {
    const { day, month, year } = date;
    if (!day || !month || !year || new Date(year, month - 1, day) > new Date()) {
      setErrors((prevErrors) => ({ ...prevErrors, dateError: 'Invalid Date, please select a valid date' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, dateError: '' }));
    }
  };

  const validateGender = (gender) => {
    if (!gender) {
      setErrors((prevErrors) => ({ ...prevErrors, genderError: 'Please select a gender' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, genderError: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/validate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ emailOrPhone: formData.emailOrPhone }),
    });
    const data = await response.json();
    if (!response.ok) {
      alert(data.error);
    } else {
      alert('Form submitted successfully!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='head-div'>
      <h2>Sign Up</h2>
      <RxCross2 />

      </div>
     <div className='name'>
     <input type="text" name="firstName" placeholder="First Name" onChange={handleInputChange} />
     <input type="text" name="surname" placeholder="Surname" onChange={handleInputChange} />
     </div>
      <input type="text" name="emailOrPhone" placeholder="Enter Mobile number or email address" onChange={handleInputChange} />
      <p className='mobile'>Enter Mobile number or email address </p>
      <input type="password" name="password" placeholder="Password must be at least 4 chars long" onChange={handleInputChange} />
      <DateOfBirth handleDateChange={handleDateChange} dateError={errors.dateError} />
      <Gender handleGenderChange={handleGenderChange} genderError={errors.genderError} />
     <div className='btn-div'>
     <button type="submit" className='s'>Sign Up</button>
     <button type="button" className='c'>Cancel</button>
     </div>
    </form>
  );
};

export default SignUpForm;
