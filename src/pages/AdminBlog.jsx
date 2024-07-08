import axios from "axios";
import React, { useEffect, useState } from "react";

function AdminBlog() {
  return (
    <>
      <div className="text-gray-900 bg-gray-200">
        <div className="p-4 flex">
          <h1 className="text-3xl">Users</h1>
        </div>
        <div className="px-3 py-4 flex justify-center">
          <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
              <tr className="border-b">
                <th className="text-left p-3 px-5">Title</th>
                <th className="text-left p-3 px-5">Description</th>
                <th className="text-left p-3 px-5">Image Link</th>
                <th></th>
              </tr>

              <tr className="border-b hover:bg-orange-100 bg-gray-100">
                <td className="p-3 px-5">
                  <input
                    type="text"
                    value="user.title"
                    className="bg-transparent border-b-2 border-gray-300 py-2"
                  />
                </td>
                <td className="p-3 px-5 ">
                  <textarea
                    // value="user.description"
                    className="bg-transparent border-b-2 border-gray-300overflow-x-auto overflow-y-auto w-full h-full"
                    // Adjust rows based on content
                  />
                </td>
                <td className="p-3 px-5">
                  <input
                    type="text"
                    value="user.image_link"
                    className="bg-transparent border-b-2 border-gray-300 py-2"
                  />
                </td>
                <td className="p-3 px-5 flex justify-end">
                  <button
                    type="button"
                    className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AdminBlog;
