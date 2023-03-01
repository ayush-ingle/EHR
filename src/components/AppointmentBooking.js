import React, { useState } from 'react';
import './AppointmentBooking.css'; // Import CSS file for styling

function AppointmentBooking() {
  const [name, setName] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send appointment data to server or perform other actions
  };

  return (
    <div className="appointment-booking-container">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="doctor">Doctor:</label>
        <select id="doctor" value={doctor} onChange={(e) => setDoctor(e.target.value)}>
          <option value="">Select a doctor</option>
          <option value="Dr. John Smith">Dr. John Smith</option>
          <option value="Dr. Jane Doe">Dr. Jane Doe</option>
          <option value="Dr. Michael Lee">Dr. Michael Lee</option>
        </select>

        <label htmlFor="date">Date:</label>
        <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />

        <label htmlFor="time">Time:</label>
        <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} />

        <button href="/appointments" type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default AppointmentBooking;
