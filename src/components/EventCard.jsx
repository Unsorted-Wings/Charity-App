import React from 'react';

const EventCard = ({ event }) => {
  const { title, date, location } = event;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
      <h3 className="text-2xl font-semibold mb-2 text-rose-600">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">{date}</p>
      <p className="text-sm text-gray-600 mb-4">{location}</p>
      <button className="bg-rose-500 text-white text-md px-6 py-2 rounded-full hover:bg-rose-600 hover:shadow-md transition-transform transform hover:scale-105 hover:shadow-md">
        View Details
      </button>
    </div>
  );
};

export default EventCard;
