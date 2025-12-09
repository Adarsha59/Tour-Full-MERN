export default function DashboardHome() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 shadow rounded">
          <h3 className="text-lg font-semibold mb-2">Total Users</h3>
          <p className="text-3xl font-bold">254</p>
        </div>

        <div className="bg-white p-6 shadow rounded">
          <h3 className="text-lg font-semibold mb-2">Blog Posts</h3>
          <p className="text-3xl font-bold">48</p>
        </div>

        <div className="bg-white p-6 shadow rounded">
          <h3 className="text-lg font-semibold mb-2">Gallery Items</h3>
          <p className="text-3xl font-bold">123</p>
        </div>
      </div>

      <div className="bg-white p-6 shadow rounded">
        <h3 className="text-lg font-semibold mb-4">Monthly Activity</h3>
        <div className="h-64 w-full bg-gray200 flex items-center justify-center rounded">
          Chart Area
        </div>
      </div>
    </div>
  );
}
