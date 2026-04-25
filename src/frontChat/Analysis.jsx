import { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend,
} from "recharts";

 
const COLORS = ["#b8963e", "#1e3a5f", "#4a8ab5", "#d4af6a", "#0d1b2e"];
 
export default function UserAnalytics() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    fetch("https://chatbot-backend-0k0q.onrender.com/admin/users-analytics")
      .then((r) => r.json())
      .then((d) => { setData(d); setLoading(false); })
      .catch((e) => { setError(e.message); setLoading(false); });
  }, []);
 
  if (loading) return (
    <div className="ua-loading">
      <div className="ua-spinner" />
      <p>Loading analytics...</p>
    </div>
  );
 
  if (error) return (
    <div className="ua-error">⚠ Failed to load: {error}</div>
  );
 
  return (
    <div className="ua-page">
 
      {/* ── HEADER ── */}
      <div className="ua-header">
        <div>
          <p className="ua-header-sub">Admin Dashboard</p>
          <h1 className="ua-header-title">User Analytics</h1>
        </div>
        <div className="ua-header-date">
          {new Date().toLocaleDateString("en-IN", { dateStyle: "long" })}
        </div>
      </div>
 
      {/* ── STAT CARDS ── */}
      <div className="ua-stats">
        <div className="ua-stat-card">
          <span className="ua-stat-icon">👤</span>
          <div>
            <p className="ua-stat-label">Total Users</p>
            <p className="ua-stat-value">{data.totalUsers}</p>
          </div>
        </div>
       
       
        <div className="ua-stat-card">
          <span className="ua-stat-icon">🏆</span>
          <div>
            <p className="ua-stat-label">Most Active</p>
            <p className="ua-stat-value ua-stat-email">
              {data.userData.length > 0
                ? data.userData.sort((a, b) => b.threadCount - a.threadCount)[0].email.split("@")[0]
                : "—"}
            </p>
          </div>
        </div>
      </div>
 
      {/* ── CHARTS ROW ── */}
      <div className="ua-charts-row">
 
        {/* Bar Chart — threads per user */}
        <div className="ua-chart-card">
          <h2 className="ua-chart-title">Threads per User</h2>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={data.userData} margin={{ top: 10, right: 10, left: -10, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e4ddd0" />
              <XAxis
                dataKey="email"
                tick={{ fontSize: 11, fill: "#8a96a8" }}
                angle={-35}
                textAnchor="end"
                interval={0}
              />
              <YAxis tick={{ fontSize: 11, fill: "#8a96a8" }} allowDecimals={false} />
              <Tooltip
                contentStyle={{ background: "#fff", border: "1px solid #e4ddd0", borderRadius: 4 }}
                formatter={(v) => [`${v} threads`, "Count"]}
              />
              <Bar dataKey="threadCount" radius={[4, 4, 0, 0]}>
                {data.userData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
 
        {/* Line Chart — users joined by month */}
        <div className="ua-chart-card">
          <h2 className="ua-chart-title">Users Joined by Month</h2>
          {data.joinedByMonth.length > 1 ? (
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={data.joinedByMonth} margin={{ top: 10, right: 10, left: -10, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e4ddd0" />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#8a96a8" }} />
                <YAxis tick={{ fontSize: 11, fill: "#8a96a8" }} allowDecimals={false} />
                <Tooltip
                  contentStyle={{ background: "#fff", border: "1px solid #e4ddd0", borderRadius: 4 }}
                  formatter={(v) => [`${v} users`, "Joined"]}
                />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="#b8963e"
                  strokeWidth={2.5}
                  dot={{ fill: "#b8963e", r: 5 }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="ua-chart-empty">Not enough monthly data yet</div>
          )}
        </div>
 
        {/* Pie Chart — thread share */}
        <div className="ua-chart-card">
          <h2 className="ua-chart-title">Thread Share</h2>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={data.userData}
                dataKey="threadCount"
                nameKey="email"
                cx="50%"
                cy="50%"
                outerRadius={90}
                label={({ email, percent }) =>
                  `${email.split("@")[0]} (${(percent * 100).toFixed(0)}%)`
                }
                labelLine={false}
              >
                {data.userData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(v, n) => [`${v} threads`, n]} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
 
      {/* ── USER TABLE ── */}
      <div className="ua-table-card">
        <h2 className="ua-chart-title">All Users</h2>
        <div className="ua-table-wrap">
          <table className="ua-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>User ID</th>
                <th>Threads</th>
                <th>Activity</th>
              </tr>
            </thead>
            <tbody>
              {data.userData
                .sort((a, b) => b.threadCount - a.threadCount)
                .map((u, i) => (
                  <tr key={u.userId}>
                    <td className="ua-td-num">{i + 1}</td>
                    <td className="ua-td-email">{u.email}</td>
                    <td className="ua-td-id">{u.userId.slice(0, 8)}…</td>
                    <td className="ua-td-count">{u.threadCount}</td>
                    <td>
                      <div className="ua-bar-wrap">
                        <div
                          className="ua-bar-fill"
                          style={{
                            width: `${Math.min(
                              100,
                              (u.threadCount / Math.max(...data.userData.map(x => x.threadCount))) * 100
                            )}%`,
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
 
    </div>
  );
}
 