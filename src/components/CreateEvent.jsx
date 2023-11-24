import React,{useState} from 'react';
import {MdClose} from 'react-icons/md';

const CreateEvent = ({ onClose }) => {
    const [eventData, setEventData] = useState({
      category: '',
      date: '',
      venue: '',
      maxParticipants: '',
    });
  
    const [items, setItems] = useState([{ name: '', quality: '', unit: 'kgs' }]);
  
    const unitOptions = ['kgs', 'liters', 'pieces', 'meters'];
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEventData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleItemChange = (index, field, value) => {
      const updatedItems = [...items];
      updatedItems[index][field] = value;
      setItems(updatedItems);
    };
  
    const handleAddItem = () => {
      setItems([...items, { name: '', quality: '', unit: 'kgs' }]);
    };
  
    const handleRemoveItem = (index) => {
      const updatedItems = [...items];
      updatedItems.splice(index, 1);
      setItems(updatedItems);
    };
  
    const handleCreateEvent = () => {

      //logic to handle creating the event
      console.log('Event Created:', { ...eventData, items });


      // Reset the form data
      setEventData({
        category: '',
        date: '',
        venue: '',
        maxParticipants: '',
      });

      // Reset the items
      setItems([{ name: '', quality: '', unit: 'kgs' }]);

    };
  
    return (
      <div className="fixed m-0 inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="w-4/5 h-4/5 bg-white p-8 rounded-md flex flex-col">
          <button
            onClick={onClose}
            className="text-white text-xl cursor-pointer focus:outline-none absolute top-4 right-4"
          >
            <MdClose size={26} />
          </button>
          <div className="flex-grow flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-1/2 pr-4 mb-4">
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <input
                  type="text"
                  name="category"
                  value={eventData.category}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full md:w-2/3 border rounded-md focus:outline-none focus:border-rose-500"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  name="date"
                  value={eventData.date}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full md:w-2/3 border rounded-md focus:outline-none focus:border-rose-500"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Venue</label>
                <input
                  type="text"
                  name="venue"
                  value={eventData.venue}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full md:w-2/3 border rounded-md focus:outline-none focus:border-rose-500"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Max Participants</label>
                <input
                  type="number"
                  name="maxParticipants"
                  value={eventData.maxParticipants}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full md:w-2/3 border rounded-md focus:outline-none focus:border-rose-500"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 pl-4 mb-4">
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Items</label>
                {items.map((item, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="text"
                      placeholder="Item Name"
                      value={item.name}
                      onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                      className="mt-1 p-2 w-1/2 border rounded-md mr-2 focus:outline-none focus:border-rose-500"
                    />
                    <input
                      type="text"
                      placeholder="Quality"
                      value={item.quality}
                      onChange={(e) => handleItemChange(index, 'quality', e.target.value)}
                      className="mt-1 p-2 w-1/4 border rounded-md mr-2 focus:outline-none focus:border-rose-500"
                    />
                    <select
                      value={item.unit}
                      onChange={(e) => handleItemChange(index, 'unit', e.target.value)}
                      className="mt-1 p-2 w-1/4 border rounded-md focus:outline-none focus:border-rose-500"
                    >
                      {unitOptions.map((unit) => (
                        <option key={unit} value={unit}>
                          {unit}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      onClick={() => handleRemoveItem(index)}
                      className="ml-2 text-rose-500 focus:outline-none"
                    >
                      <MdClose size={22} color="#EF4444" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddItem}
                  className="bg-rose-500 text-white text-md px-4 py-2 rounded-full hover:bg-rose-600 transition-transform transform hover:scale-105 focus:outline-none"
                >
                  Add Item
                </button>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={handleCreateEvent}
            className="bg-rose-500 text-white text-lg my-2 px-9 py-3 rounded-full self-center hover:bg-rose-600 transition-transform transform hover:scale-105 focus:outline-none"
          >
            Post Event
          </button>
        </div>
      </div>
    );
  };
  
  export default CreateEvent;
  