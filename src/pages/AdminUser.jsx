export default function UsersList() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Users</h2>

      <div className="bg-white p-4 shadow rounded">
        <table className="w-full">
          <thead>
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t">
              <td className="p-3">John Doe</td>
              <td className="p-3">john@mail.com</td>
              <td className="p-3">
                <button className="px-3 py-1 bg-blue-500 text-white rounded mr-2">
                  Edit
                </button>
                <button className="px-3 py-1 bg-red-500 text-white rounded">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
