import  { useState, useEffect } from 'react';

const DateOfBirth = ({ handleDateChange, dateError }) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    handleDateChange({ day, month, year });
  }, [day, month, year]);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  const years = Array.from({ length: 120 }, (_, i) => new Date().getFullYear() - i);

  return (
    <div>
      <label>Date of Birth</label>
      <div className='dob'>
        <select name="day" value={day} onChange={(e) => setDay(e.target.value)}>
          <option value="">Day</option>
          {days.map(day => <option key={day} value={day}>{day}</option>)}
        </select>
        <select name="month" value={month} onChange={(e) => setMonth(e.target.value)}>
          <option value="">Month</option>
          {months.map((month, index) => <option key={index} value={index + 1}>{month}</option>)}
        </select>
        <select name="year" value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="">Year</option>
          {years.map(year => <option key={year} value={year}>{year}</option>)}
        </select>
      </div>
      {dateError && <div className="error"><span>{dateError}</span></div>}
    </div>
  );
};

export default DateOfBirth;
