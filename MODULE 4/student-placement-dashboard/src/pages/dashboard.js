import { useEffect, useState } from "react";

function Dashboard() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/applications")
      .then((response) => response.json())
      .then((data) => {
        setApplications(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const totalApplications = applications.length;

  const interviews = applications.filter(
    (application) =>
      application.status === "Interview"
  ).length;

  const selected = applications.filter(
    (application) =>
      application.status === "Selected"
  ).length;

  const rejected = applications.filter(
    (application) =>
      application.status === "Rejected"
  ).length;

  return (
    <div className="page">

      <h1>Student Placement Dashboard</h1>

      <p>Welcome to your placement dashboard 👋</p>

      <div className="stats-grid">

        <div className="stat-card">
          <h3>Applications</h3>
          <h2>{totalApplications}</h2>
        </div>

        <div className="stat-card">
          <h3>Interviews</h3>
          <h2>{interviews}</h2>
        </div>

        <div className="stat-card">
          <h3>Selected</h3>
          <h2>{selected}</h2>
        </div>

        <div className="stat-card">
          <h3>Rejected</h3>
          <h2>{rejected}</h2>
        </div>

      </div>

      <div className="dashboard-card">
        <h2>Upcoming Deadlines</h2>

        <p>📅 TCS - 15 October 2026</p>
        <p>📅 Infosys - 18 October 2026</p>
        <p>📅 Wipro - 20 October 2026</p>
      </div>

    </div>
  );
}

export default Dashboard;