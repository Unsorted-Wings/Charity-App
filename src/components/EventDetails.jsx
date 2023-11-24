import React from 'react';
import { MdClose } from 'react-icons/md';

const EventDetails = ({ eventDetails, items, onClose }) => {
  const handleDonate = () => {
    // Add logic to handle the donation
    // For now, let's just log the selected items
    const selectedItems = items.filter((item) => item.selected);
    console.log('Donating Items:', selectedItems);
    // You can add additional logic here, e.g., sending donation data to a server
    // Close the modal
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 h-screen flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-4/5 h-4/5 bg-white p-8 rounded-md flex flex-col">
        <button
          onClick={onClose}
          className="text-white text-xl cursor-pointer focus:outline-none absolute top-4 right-4"
        >
          <MdClose size={26} />
        </button>
        <button
          type="button"
          onClick={handleDonate}
          className="bg-rose-500 text-white text-lg my-2 px-9 py-3 rounded-xl self-center hover:bg-rose-600 transition-transform transform hover:scale-105 focus:outline-none"
        >
          Donate
        </button>
      </div >
    </div >
  );
};

export default EventDetails;
