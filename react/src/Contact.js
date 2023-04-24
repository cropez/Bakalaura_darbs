import * as React from 'react';
import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Contact.css';

export default function Contact() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setDateState(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const [startDate, setStartDate] = useState(new Date());

  return (
    <><div className="contact-container">
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
                  dateFormat="MMMM d, yyyy" />
          </div>
      </div><div className="texts">
              <p>Autor</p>

              <p> Adrese:  Saulkrasti, Saulkrastu novads</p>

              <p> Saulkrastu novada Saulkrastu pilsētas</p>

              <p> E-pasts: example@example.com, </p>
              <p> Talrunis :+37122344428</p>
          </div></>
  );
}