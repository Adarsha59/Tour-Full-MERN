import React, { useState } from "react";

const TourBooking = () => {
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const handleBooking = () => {
    alert(`Tour booked for ${location} on ${date}`);
  };

  return (
    <div className=" flex items-center justify-center  dark:bg-slate-200 text-white ">
      <div className="bg-yellow bg-opacity-10 bg-gradient-to-r from-blue-500 to-green backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg flex space-x-4">
        <div>
          <label className="block text-white mb-2" htmlFor="date">
            Select Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg bg-white bg-opacity-20 text-white"
          />
        </div>

        <div>
          <label className="block text-white mb-2" htmlFor="location">
            Select Location
          </label>
          <select
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg bg-white bg-opacity-20 text-orange"
          >
            <option value="">Choose a location</option>
            <option value="Paris">Paris</option>
            <option value="New York">New York</option>
            <option value="Tokyo">Tokyo</option>
            <option value="Sydney">Sydney</option>
          </select>
        </div>

        <div className="flex items-end">
          <button
            onClick={handleBooking}
            className="bg-green-500 text-pink py-2 px-4 rounded-lg hover:bg-yellow-700 transition duration-200"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourBooking;
