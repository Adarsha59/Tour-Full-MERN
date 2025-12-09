export default function BlogList() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Blog Posts</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 shadow rounded">
          <img
            src="/placeholder.png"
            className="w-full h-40 object-cover rounded mb-3"
          />
          <h3 className="text-lg font-semibold mb-2">Blog title</h3>
          <button className="px-3 py-1 bg-blue-600 text-white rounded mr-2">
            Edit
          </button>
          <button className="px-3 py-1 bg-red-600 text-white rounded">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
