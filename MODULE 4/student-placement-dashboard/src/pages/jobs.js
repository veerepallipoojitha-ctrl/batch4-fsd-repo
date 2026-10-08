import { useEffect, useState } from "react";
import JobCard from "../components/jobcard";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/jobs")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleApply = async (job) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/applications",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            company: job.company,
            position: job.position
          })
        }
      );

      if (response.ok) {
        alert(`Applied to ${job.company} successfully!`);
      }
    } catch (error) {
      alert("Application failed");
    }
  };

  const filteredJobs = jobs.filter((job) =>
    job.company
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="page">

      <h1>Job Opportunities</h1>

      <input
        className="search-input"
        type="text"
        placeholder="Search company..."
        value={search}
        onChange={(event) =>
          setSearch(event.target.value)
        }
      />

      <div className="job-grid">

        {filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onApply={handleApply}
          />
        ))}

      </div>

    </div>
  );
}

export default Jobs;