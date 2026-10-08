const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ===============================
// JOB OPENINGS
// ===============================

const jobs = [
  {
    id: 1,
    company: "TCS",
    position: "Software Developer",
    location: "Chennai",
    salary: "6 LPA",
    department: "Computer Science",
    deadline: "2026-10-15"
  },
  {
    id: 2,
    company: "Infosys",
    position: "Graduate Engineer",
    location: "Bangalore",
    salary: "5 LPA",
    department: "Computer Science",
    deadline: "2026-10-18"
  },
  {
    id: 3,
    company: "Wipro",
    position: "Frontend Developer",
    location: "Hyderabad",
    salary: "5.5 LPA",
    department: "Information Technology",
    deadline: "2026-10-20"
  },
  {
    id: 4,
    company: "Accenture",
    position: "Software Engineer",
    location: "Pune",
    salary: "7 LPA",
    department: "Computer Science",
    deadline: "2026-10-22"
  }
];

// ===============================
// APPLICATIONS
// ===============================

let applications = [
  {
    id: 1,
    studentId: 1,
    company: "TCS",
    position: "Software Developer",
    status: "Interview"
  },
  {
    id: 2,
    studentId: 1,
    company: "Infosys",
    position: "Graduate Engineer",
    status: "Applied"
  },
  {
    id: 3,
    studentId: 1,
    company: "Wipro",
    position: "Frontend Developer",
    status: "Selected"
  }
];

// ===============================
// NOTIFICATIONS
// ===============================

const notifications = [
  {
    id: 1,
    type: "Interview Alert",
    message: "TCS interview is scheduled for 20 October."
  },
  {
    id: 2,
    type: "Company Update",
    message: "New Infosys placement opportunity is available."
  },
  {
    id: 3,
    type: "Announcement",
    message: "Placement registration deadline is approaching."
  }
];

// ===============================
// STUDENT PROFILE
// ===============================

let profile = {
  id: 1,
  name: "Poojitha",
  email: "poojitha@example.com",
  phone: "9876543210",
  college: "ABC College",
  department: "Computer Science",
  cgpa: "8.5",
  skills: "React, JavaScript, Node.js"
};

// ===============================
// LOGIN
// ===============================

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password are required"
    });
  }

  res.json({
    id: 1,
    name: "Poojitha",
    email: email
  });
});

// ===============================
// REGISTER
// ===============================

app.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required"
    });
  }

  res.status(201).json({
    message: "Registration successful",
    user: {
      name: name,
      email: email
    }
  });
});

// ===============================
// GET JOBS
// ===============================

app.get("/api/jobs", (req, res) => {
  res.json(jobs);
});

// ===============================
// GET APPLICATIONS
// ===============================

app.get("/api/applications", (req, res) => {
  res.json(applications);
});

// ===============================
// APPLY FOR JOB
// ===============================

app.post("/api/applications", (req, res) => {
  const { company, position } = req.body;

  if (!company || !position) {
    return res.status(400).json({
      message: "Company and position are required"
    });
  }

  const newApplication = {
    id: applications.length + 1,
    studentId: 1,
    company: company,
    position: position,
    status: "Applied"
  };

  applications.push(newApplication);

  res.status(201).json(newApplication);
});

// ===============================
// GET NOTIFICATIONS
// ===============================

app.get("/api/notifications", (req, res) => {
  res.json(notifications);
});

// ===============================
// GET PROFILE
// ===============================

app.get("/api/profile", (req, res) => {
  res.json(profile);
});

// ===============================
// UPDATE PROFILE
// ===============================

app.put("/api/profile", (req, res) => {
  profile = {
    ...profile,
    ...req.body
  };

  res.json(profile);
});

// ===============================
// START SERVER
// ===============================

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});