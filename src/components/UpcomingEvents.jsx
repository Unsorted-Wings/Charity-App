import React from 'react';
import EventCard from './EventCard';

const UpcomingEvents = () => {
  return (
    <div className="py-12 h-fit bg-rose-200 flex-col">
      <div className='text-center'>
        <h1 className="mx-5 text-5xl font-bold mb-8 text-rose-600">Discover Upcoming Events</h1>
      </div>


      <div className="px-24 py-10 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-14">
        {upcomingEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

const upcomingEvents = [
  { id: 1, title: 'Event 1', date: '2023-11-21', location: 'City A' },
  { id: 2, title: 'Event 2', date: '2023-11-22', location: 'City B' },
  { id: 3, title: 'Event 3', date: '2023-11-22', location: 'City C' },
  { id: 4, title: 'Event 4', date: '2023-11-22', location: 'City D' },
  { id: 5, title: 'Event 5', date: '2023-11-22', location: 'City E' },
  { id: 6, title: 'Event 6', date: '2023-11-22', location: 'City F' },
  { id: 7, title: 'Event 7', date: '2023-11-22', location: 'City G' },
  { id: 8, title: 'Event 8', date: '2023-11-22', location: 'City H' },
];

export default UpcomingEvents;
