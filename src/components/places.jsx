// Places.jsx
import React from "react";

const Places = () => {
  return (
    <div className="pt-36 pb-32  dark:bg-slate-200 text-white">
      <h1 className="text-2xl font-bold mb-4">Manage Places</h1>
      <button className="bg-blue-500 dark:text-black  file:px-4 py-2 rounded mb-4">
        Add New Place
      </button>
      <table className="min-w-full dark:text-black">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Image</th>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Render list of places here */}
          <tr>
            <td className="py-2 px-4 border-b">Image URL</td>
            <td className="py-2 px-4 border-b">Place Name</td>
            <td className="py-2 px-4 border-b">Description</td>
            <td className="py-2 px-4 border-b">
              <button className="bg-yellow-500 text-white px-4 py-1 rounded mr-2">
                Edit
              </button>
              <button className="bg-red-500 text-white px-4 py-1 rounded">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Places;
