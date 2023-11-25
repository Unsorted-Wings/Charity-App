import React from 'react';
import { FiCalendar } from 'react-icons/fi';

const EventCard = ({ event }) => {
  const { title, date, location } = event;
  const eventDate = new Date(date);
  const dayOfMonth = eventDate.getDate();

  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  const formattedDate = eventDate.toLocaleDateString('en-US', options);

  return (
    <div className="bg-white px-10 py-6 rounded-lg shadow-md flex items-center justify-between">
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <div className="relative">
            <FiCalendar className="text-rose-500 text-7xl relative" />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-xl text-rose-500 font-bold">
              {dayOfMonth}
            </span>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-rose-700">{title}</h3>
          <p className="text-md text-gray-600 mb-2">{formattedDate}</p>
          <p className="text-md text-gray-600 mb-4">{location}</p>
        </div>
      </div>
      <button className="text-rose-500 text-md hover:text-rose-700 px-6 py-2 rounded-full border border-rose-500 hover:border-rose-700 transform hover:scale-105 transition duration-300">
        View
      </button>
    </div>
  );
};

export default EventCard;
