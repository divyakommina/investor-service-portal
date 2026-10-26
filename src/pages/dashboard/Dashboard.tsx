import {
  FiAlertCircle,
  FiCheckCircle,
  FiClock,
  FiFileText,
} from "react-icons/fi";

import StatCard from "../../components/dashbaord/StatsCard";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Good Morning, Administrator 👋
        </h1>

        <p className="mt-2 text-slate-500">
          Here's today's service request overview.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Requests"
          value={150}
          icon={<FiFileText size={24} />}
          color="bg-blue-600"
        />

        <StatCard
          title="Pending Requests"
          value={40}
          icon={<FiClock size={24} />}
          color="bg-yellow-500"
        />

        <StatCard
          title="Resolved Requests"
          value={100}
          icon={<FiCheckCircle size={24} />}
          color="bg-green-600"
        />

        <StatCard
          title="SLA Breached"
          value={10}
          icon={<FiAlertCircle size={24} />}
          color="bg-red-600"
        />
      </div>

      {/* Recent Requests */}
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-5">
          <h2 className="text-xl font-semibold text-slate-800">
            Recent Service Requests
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left">Ticket ID</th>
                <th className="px-6 py-4 text-left">Investor</th>
                <th className="px-6 py-4 text-left">Request Type</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Assigned To</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t">
                <td className="px-6 py-4">SR-1001</td>
                <td className="px-6 py-4">Rahul Sharma</td>
                <td className="px-6 py-4">Bank Update</td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-700">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4">Amit</td>
              </tr>

              <tr className="border-t">
                <td className="px-6 py-4">SR-1002</td>
                <td className="px-6 py-4">Priya Singh</td>
                <td className="px-6 py-4">Address Update</td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                    Resolved
                  </span>
                </td>
                <td className="px-6 py-4">Sneha</td>
              </tr>

              <tr className="border-t">
                <td className="px-6 py-4">SR-1003</td>
                <td className="px-6 py-4">Vikram Rao</td>
                <td className="px-6 py-4">Nominee Update</td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                    In Progress
                  </span>
                </td>
                <td className="px-6 py-4">Rahul</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;