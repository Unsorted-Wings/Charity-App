import React, { useState } from 'react';
import CreateEvent from './CreateEvent.jsx';
import EventCard from './EventCard.jsx';

const UserProfile = () => {
  const initialUser = {
    id: 1,
    name: 'Name',
    email: 'mail@gmail.com',
    profilePic: '../assets/one.webp',
    location: 'City, Country',
    about: 'A brief description about the user.',
    gender: 'Male',
    dateOfBirth: '1990-01-01',
    qualification: 'Bachelor\'s Degree',
  };

  const [user, setUser] = useState(initialUser);
  const [activeTab, setActiveTab] = useState(0);

  // State to manage the create event modal
  const [isCreateEventOpen, setIsCreateEventOpen] = useState(false);

  // Function to open the create event modal
  const openCreateEventModal = () => {
    setIsCreateEventOpen(true);
  };

  // Function to close the create event modal
  const closeCreateEventModal = () => {
    setIsCreateEventOpen(false);
  };

  return (
    <div className="container mx-auto mt-8 p-8 bg-backcolor rounded-lg shadow-md">
      <div className="flex">
        <div className="w-1/4 pr-8">
          <img
            src={user.profilePic}
            alt="Profile"
            className="rounded-full h-32 w-32 mb-4 object-cover mx-auto"
          />
          <h2 className="text-2xl font-semibold text-center text-headline mb-2">{user.name}</h2>
          <p className="text-para text-center">{user.email}</p>
        </div>
        <div className="w-3/4">
          <div className="flex mb-4 space-x-4">
            <button
              onClick={() => setActiveTab(0)}
              className={`flex-1 py-2 px-4 text-white focus:outline-none transition-all ${activeTab === 0 ? 'bg-rose-600 transform scale-105' : 'bg-rose-300'
                } rounded-full`}
            >
              User Info
            </button>
            <button
              onClick={() => setActiveTab(1)}
              className={`flex-1 py-2 px-4 text-white focus:outline-none transition-all ${activeTab === 1 ? 'bg-rose-600 transform scale-105' : 'bg-rose-300'
                } rounded-full`}
            >
              Organized Events
            </button>
            <button
              onClick={() => setActiveTab(2)}
              className={`flex-1 py-2 px-4 text-white focus:outline-none transition-all ${activeTab === 2 ? 'bg-rose-600 transform scale-105' : 'bg-rose-300'
                } rounded-full`}
            >
              Participated Events
            </button>

            {/* CreateEvent modal */}
            {isCreateEventOpen && <CreateEvent onClose={closeCreateEventModal} />}
          </div>
          <div className="h-[32rem] bg-tabbackground p-4 rounded-md">
            {activeTab === 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-4">User Info</h3>
                <div className="mb-2">
                  <p>
                    <strong>Location:</strong> {user.location}
                  </p>
                </div>
                <div className="mb-2">
                  <p>
                    <strong>Gender:</strong> {user.gender}
                  </p>
                </div>
                <div className="mb-2">
                  <p>
                    <strong>Date of Birth:</strong> {user.dateOfBirth}
                  </p>
                </div>
                <div className="mb-2">
                  <p>
                    <strong>Qualification:</strong> {user.qualification}
                  </p>
                </div>
                <div className="mb-4">
                  <p>
                    <strong>About:</strong> {user.about}
                  </p>
                </div>
              </div>
            )}
            {activeTab === 1 && (
              <div>
                <h3 className="text-xl text-headline font-semibold mb-3">Organized Events</h3>

                {/* Host an Event button */}
                <button
                  onClick={openCreateEventModal}
                  className="bg-rose-500 text-white text-md my-2 px-6 py-2 rounded-full transition-transform transform hover:scale-105 hover:bg-rose-600 hover:shadow-md"
                >
                  Host an Event
                </button>
                <div className="mt-2 grid grid-cols-2 gap-4">
                  {organizedEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </div>
            )}
            {activeTab === 2 && (
              <div>
                <h3 className="text-xl text-headline font-semibold mb-4">Participated Events</h3>
                <div className="grid grid-cols-2 gap-4">
                  {participatedEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const organizedEvents = [
  { id: 1, title: 'Event 1', date: '2023-11-21', location: 'City A' },
  { id: 2, title: 'Event 2', date: '2023-11-22', location: 'City B' },
  { id: 3, title: 'Event 3', date: '2023-11-22', location: 'City C' },
  { id: 4, title: 'Event 4', date: '2023-11-22', location: 'City D' },
];

const participatedEvents = [
  { id: 1, title: 'Event 1', date: '2023-11-23', location: 'City E' },
  { id: 2, title: 'Event 2', date: '2023-11-24', location: 'City F' },
  { id: 3, title: 'Event 3', date: '2023-11-22', location: 'City G' },
  { id: 4, title: 'Event 4', date: '2023-11-22', location: 'City H' },
];

export default UserProfile;
