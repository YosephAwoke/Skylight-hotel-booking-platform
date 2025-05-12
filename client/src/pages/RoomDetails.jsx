import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';

const RoomDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await fetch(`/api/rooms/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch room details');
        }
        const data = await response.json();
        setRoom(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRoomDetails();
  }, [id]);

  const handleBooking = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You need to sign in to book a room.');
      navigate('/signin');
      return;
    }
    navigate(`/book/${id}`);
  };

  if (loading) return <Spinner />;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={room.image} alt={room.name} className="w-full md:w-1/2 h-80 object-cover rounded" />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{room.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{room.description}</p>
          <p className="text-xl font-semibold mb-4">${room.price} / night</p>
          <button onClick={handleBooking} className="bg-blue-500 text-white py-2 px-4 rounded">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
