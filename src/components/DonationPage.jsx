import React, { useState } from 'react';

const DonationPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemSelect = (item) => {
    setSelectedItem(item);
  };

  const { items } = eventDetails;

  return (
    <div className="container mx-auto mt-8 p-8 bg-rose-50">
      <h1 className="text-4xl font-bold mb-6 text-rose-700">Donate Items</h1>

      <div className="flex">
        {/* Left Column - List of Donation Items */}
        <div className="flex-1 pr-8">
          <h2 className="text-2xl font-bold mb-4 text-rose-700">Available Items</h2>

          <ul className="list-disc pl-4">
            {items.map((item) => (
              <li
                key={item.id}
                onClick={() => handleItemSelect(item)}
                className={`cursor-pointer mb-2 text-gray-800 hover:text-rose-500 ${
                  selectedItem && selectedItem.id === item.id ? 'font-bold' : ''
                }`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Selected Item Details */}
        <div className="flex-1">
          {selectedItem ? (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-rose-700">Selected Item</h2>
              <p className="text-lg text-gray-800">{selectedItem.name}</p>
              
            </div>
          ) : (
            <p className="text-gray-800">Select an item to view details and proceed with the donation.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
