import React from 'react';

const Notification = ({ message, type }) => {
  if (!message) return null;

  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';

  return (
    <div className={`${bgColor} text-white py-2 px-4 rounded mb-4 text-center`}>
      {message}
    </div>
  );
};

export default Notification;
