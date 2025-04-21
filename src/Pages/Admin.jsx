import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Admin() {
  // Sample chart data for Line Chart
  const lineChartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "User Growth",
        data: [30, 40, 50, 60, 70, 80],
        fill: false,
        borderColor: "#4caf50",
        tension: 0.1,
      },
      {
        label: "Event Registrations",
        data: [20, 30, 40, 50, 60, 70],
        fill: false,
        borderColor: "#2196f3",
        tension: 0.1,
      },
    ],
  };

  // Sample chart data for Bar Chart
  const barChartData = {
    labels: ["User Role", "Admin", "User", "Guest"],
    datasets: [
      {
        label: "User Count",
        data: [300, 400, 100],
        backgroundColor: ["#2196f3", "#4caf50", "#ff9800"],
        borderColor: ["#2196f3", "#4caf50", "#ff9800"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 shadow-lg min-h-screen p-6 fixed">
        <h1 className="text-2xl font-bold mb-8 text-center">Admin Panel</h1>
        <ul className="space-y-6">
          <li className="hover:bg-gray-700 p-3 rounded-lg cursor-pointer">
            <i className="fas fa-tachometer-alt"></i>{" "}
            <span className="ml-2">Dashboard</span>
          </li>
          <li className="hover:bg-gray-700 p-3 rounded-lg cursor-pointer">
            <i className="fas fa-users"></i> <span className="ml-2">Users</span>
          </li>
          <li className="hover:bg-gray-700 p-3 rounded-lg cursor-pointer">
            <i className="fas fa-calendar-alt"></i>{" "}
            <span className="ml-2">Events</span>
          </li>
          <li className="hover:bg-gray-700 p-3 rounded-lg cursor-pointer">
            <i className="fas fa-bell"></i>{" "}
            <span className="ml-2">Notifications</span>
          </li>
          <li className="hover:bg-gray-700 p-3 rounded-lg cursor-pointer">
            <i className="fas fa-cogs"></i>{" "}
            <span className="ml-2">Settings</span>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8 w-full">
        {/* Charts */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Growth and Registrations</h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">
              User Growth vs Event Registrations
            </h3>
            <Line data={lineChartData} />
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              User Role Distribution
            </h3>
            <Bar data={barChartData} />
          </div>
        </section>

        {/* Dashboard Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-4">Total Users</h3>
            <p className="text-4xl font-bold">1,245</p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-teal-400 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-4">Total Events</h3>
            <p className="text-4xl font-bold">76</p>
          </div>
          <div className="bg-gradient-to-r from-yellow-500 to-orange-400 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-4">Pending Notifications</h3>
            <p className="text-4xl font-bold">32</p>
          </div>
        </section>

        {/* User Management Table */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">User Management</h2>
          <table className="w-full text-left table-auto">
            <thead>
              <tr className="bg-gray-700">
                <th className="p-4">#</th>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Role</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-700 transition">
                <td className="p-4">1</td>
                <td className="p-4">John Doe</td>
                <td className="p-4">johndoe@email.com</td>
                <td className="p-4">Admin</td>
                <td className="p-4 space-x-2">
                  <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg">
                    Delete
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-700 transition">
                <td className="p-4">2</td>
                <td className="p-4">Jane Smith</td>
                <td className="p-4">janesmith@email.com</td>
                <td className="p-4">User</td>
                <td className="p-4 space-x-2">
                  <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Admin;
