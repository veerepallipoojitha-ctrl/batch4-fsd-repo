import { useEffect, useState } from "react";

function Applications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/applications")
      .then((response) => response.json())
      .then((data) => {
        setApplications(data);
      });
  }, []);

  return (
    <div className="page">

      <h1>My Applications</h1>

      <div className="application-list">

        {applications.map((application) => (
          <div
            className="application-card"
            key={application.id}
          >

            <h2>{application.company}</h2>

            <p>
              Position: {application.position}
            </p>

            <p>
              Status:
              <strong> {application.status}</strong>
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Applications;