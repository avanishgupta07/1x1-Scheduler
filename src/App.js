import React, { useState} from 'react';

function BookingForm() {
  const [areaOfInterest, setAreaOfInterest] = useState('');
  const [mentorId, setMentorId] = useState('');
  const [startTime, setStartTime] = useState('');
  const [duration, setDuration] = useState(30);
  const [isPremium, setIsPremium] = useState(false);

  const [mentors, setMentors] = useState([
    { id: 'a', name: 'Mentor A' },
    { id: 'b', name: 'Mentor B' },
    { id: 'c', name: 'Mentor C' },
    { id: 'd', name: 'Mentor D' }
  ]);
  
  const [availableTimes, setAvailableTimes] = useState([
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ]);

  const [bookings, setBookings] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the selected time slot is already booked for the selected mentor
    const isAlreadyBooked = bookings.some(
      booking => booking.mentorId === mentorId && booking.startTime === startTime
    );

    if (isAlreadyBooked) {
      alert('This time slot is already booked for the selected mentor. Please choose another time.');
      return;
    }

    // Proceed to book the session
    const newBooking = {
      mentorId,
      studentId: 1, // Assuming a fixed student ID for simplicity
      startTime,
      duration,
      areaOfInterest,
      isPremium
    };

    // Update the bookings state
    setBookings([...bookings, newBooking]);

    alert('Session booked successfully!');

    // Reset the form (optional)
    setAreaOfInterest('');
    setMentorId('');
    setStartTime('');
    setDuration(30);
    setIsPremium(false);
  };

  return (
    <div className="booking-form-container">
      <h2>Book a Mentoring Session</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="areaOfInterest">Area of Interest</label>
          <select
            id="areaOfInterest"
            value={areaOfInterest}
            onChange={e => setAreaOfInterest(e.target.value)}
            required
          >
            <option value="">Select Area of Interest</option>
            <option value="programming">Programming</option>
            <option value="design">Design</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="mentor">Mentor</label>
          <select
            id="mentor"
            value={mentorId}
            onChange={e => setMentorId(e.target.value)}
            required
          >
            <option value="">Select Mentor</option>
            {mentors.map(mentor => (
              <option key={mentor.id} value={mentor.id}>{mentor.name}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="startTime">Start Time</label>
          <select
            id="startTime"
            value={startTime}
            onChange={e => setStartTime(e.target.value)}
            required
          >
            <option value="">Select Start Time</option>
            {availableTimes.map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="duration">Duration</label>
          <select
            id="duration"
            value={duration}
            onChange={e => setDuration(Number(e.target.value))}
            required
          >
            <option value={30}>30 minutes</option>
            <option value={45}>45 minutes</option>
            <option value={60}>60 minutes</option>
          </select>
        </div>

        <div className="form-group checkbox">
          <label>
            <input
              type="checkbox"
              checked={isPremium}
              onChange={e => setIsPremium(e.target.checked)}
            />
            Premium Service (Select specific mentor)
          </label>
        </div>

        <button type="submit" className="submit-button">Book Session</button>
      </form>

      <style jsx>{`
        .booking-form-container {
          max-width: 500px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f5f5f5;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        h2 {
          text-align: center;
          color: #333;
          margin-bottom: 20px;
        }

        .form-group {
          margin-bottom: 15px;
        }

        label {
          display: block;
          margin-bottom: 5px;
          color: #666;
        }

        select, input[type="checkbox"] {
          width: 100%;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
        }

        .checkbox {
          display: flex;
          align-items: center;
        }

        .checkbox input {
          margin-right: 10px;
        }

        .submit-button {
          width: 100%;
          padding: 10px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .submit-button:hover {
          background-color: #45a049;
        }
      `}</style>
    </div>
  );
}

export default BookingForm;
