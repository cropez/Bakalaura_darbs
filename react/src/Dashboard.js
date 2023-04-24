import * as React from 'react';
import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Banner from './img/img_5.png';
import './Dashboard.css';

export default function Dashboard() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setDateState(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="dashboard-container">
      <div className="time-display">
      {dateState.toLocaleString('en-LV', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  })}
      </div>
      <div className="date-picker-container">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="MMMM d, yyyy"
        />
      </div>
      <img className="banner-image" src={Banner} alt="Error" />
    </div>
  );
}