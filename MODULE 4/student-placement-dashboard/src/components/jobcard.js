function JobCard({ job, onApply }) {
  return (
    <div className="job-card">
      <h2>{job.company}</h2>

      <h3>{job.position}</h3>

      <p>📍 {job.location}</p>

      <p>💰 {job.salary}</p>

      <p>🎓 {job.department}</p>

      <p>📅 Deadline: {job.deadline}</p>

      <button onClick={() => onApply(job)}>
        Apply Now
      </button>
    </div>
  );
}

export default JobCard;