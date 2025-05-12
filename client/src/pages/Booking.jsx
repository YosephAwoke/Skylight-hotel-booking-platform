import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Notification from '../components/Notification';

const Booking = () => {
  const { id } = useParams();
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [notification, setNotification] = useState({ message: '', type: '' });

  const handleBooking = async (e) => {
    e.preventDefault();
    if (!checkInDate || !checkOutDate) {
      setNotification({ message: 'Please select both check-in and check-out dates', type: 'error' });
      return;
    }
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          room: id,
          checkInDate,
          checkOutDate,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setNotification({ message: 'Booking successful!', type: 'success' });
      } else {
        setNotification({ message: data.message || 'Booking failed', type: 'error' });
      }
    } catch (error) {
      setNotification({ message: 'An error occurred. Please try again.', type: 'error' });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <Notification message={notification.message} type={notification.type} />
      <h2 className="text-2xl font-bold mb-4">Book Your Stay</h2>
      <form onSubmit={handleBooking}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Check-In Date</label>
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Check-Out Date</label>
          <input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default Booking;
