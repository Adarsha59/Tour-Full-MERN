import React, { useState } from "react";
import blogData from "../../public/blog.json"; // Assuming blogData is correctly imported

const Blogs = () => {
  const [blogs, setBlogs] = useState(blogData); // Initialize with blogData
  const [editBlog, setEditBlog] = useState(null);
  const [newBlog, setNewBlog] = useState({
    title: "",
    image: "",
    description: "",
  });

  const handleAddBlog = () => {
    const newId = blogs.length ? blogs[blogs.length - 1].id + 1 : 1;
    setBlogs([...blogs, { ...newBlog, id: newId }]);
    setNewBlog({ title: "", image: "", description: "" });
  };

  const handleEditBlog = (id) => {
    const updatedBlogs = blogs.map((blog) =>
      blog.id === id ? editBlog : blog
    );
    setBlogs(updatedBlogs);
    setEditBlog(null);
  };

  const handleDeleteBlog = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
  };

  return (
    <div className="pt-36 pb-32  dark:bg-slate-200 dark:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-black">
          Manage Blogs
        </h1>
        <div className="mb-6 flex space-x-4">
          <input
            type="text"
            placeholder="Title"
            value={newBlog.title}
            onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
            className="flex-1 appearance-none border rounded p-3 text-gray-900 dark:bg-gray-800 dark:text-black"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newBlog.image}
            onChange={(e) => setNewBlog({ ...newBlog, image: e.target.value })}
            className="flex-1 appearance-none border rounded p-3 text-gray-900 dark:bg-gray-800 dark:text-black"
          />
          <input
            type="text"
            placeholder="Description"
            value={newBlog.description}
            onChange={(e) =>
              setNewBlog({ ...newBlog, description: e.target.value })
            }
            className="flex-1 appearance-none border rounded p-3 text-gray-900 dark:bg-gray-800 dark:text-black"
          />
          <button
            className="bg-blue-500  text-black  rounded"
            onClick={handleAddBlog}
          >
            Add New Blog
          </button>
        </div>
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-400">
          <thead className="bg-gray-200 dark:bg-gray-700">
            <tr>
              <th className="py-3 px-4 text-left">Image</th>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Description</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-400">
            {blogs.map((blog) => (
              <tr key={blog.id}>
                <td className="py-4 px-4">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-20 h-20 object-cover"
                  />
                </td>
                <td className="py-4 px-4">
                  {editBlog && editBlog.id === blog.id ? (
                    <input
                      type="text"
                      value={editBlog.title}
                      onChange={(e) =>
                        setEditBlog({ ...editBlog, title: e.target.value })
                      }
                      className="border rounded p-2 text-gray-900 dark:bg-gray-800 dark:text-black"
                    />
                  ) : (
                    blog.title
                  )}
                </td>
                <td className="py-4 px-4">
                  {editBlog && editBlog.id === blog.id ? (
                    <input
                      type="text"
                      value={editBlog.description}
                      onChange={(e) =>
                        setEditBlog({
                          ...editBlog,
                          description: e.target.value,
                        })
                      }
                      className="border rounded p-2 text-gray-900 dark:bg-gray-800 dark:text-black"
                    />
                  ) : (
                    blog.description
                  )}
                </td>
                <td className="py-4 px-4">
                  {editBlog && editBlog.id === blog.id ? (
                    <button
                      className="bg-green-500  text-black px-4 py-2 rounded mr-2"
                      onClick={() => handleEditBlog(blog.id)}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      className="bg-yellow-500  text-black px-4 py-2 rounded mr-2"
                      onClick={() => setEditBlog(blog)}
                    >
                      Edit
                    </button>
                  )}
                  <button
                    className="bg-red-500  text-black px-4 py-2 rounded"
                    onClick={() => handleDeleteBlog(blog.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Blogs;
