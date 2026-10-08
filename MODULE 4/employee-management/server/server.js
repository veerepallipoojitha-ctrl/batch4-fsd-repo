const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let employees = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
    department: "IT",
    salary: 50000
  },
  {
    id: 2,
    name: "Priya Kumar",
    email: "priya@example.com",
    department: "HR",
    salary: 55000
  }
];

// GET all employees
app.get("/api/employees", (req, res) => {
  res.json(employees);
});

// GET employee by ID
app.get("/api/employees/:id", (req, res) => {
  const employee = employees.find(
    (emp) => emp.id === parseInt(req.params.id)
  );

  if (!employee) {
    return res.status(404).json({ message: "Employee not found" });
  }

  res.json(employee);
});

// POST - Add employee
app.post("/api/employees", (req, res) => {
  const { name, email, department, salary } = req.body;

  const newEmployee = {
    id: employees.length + 1,
    name,
    email,
    department,
    salary
  };

  employees.push(newEmployee);

  res.status(201).json(newEmployee);
});

// PUT - Update employee
app.put("/api/employees/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const employee = employees.find((emp) => emp.id === id);

  if (!employee) {
    return res.status(404).json({ message: "Employee not found" });
  }

  employee.name = req.body.name;
  employee.email = req.body.email;
  employee.department = req.body.department;
  employee.salary = req.body.salary;

  res.json(employee);
});

// DELETE employee
app.delete("/api/employees/:id", (req, res) => {
  const id = parseInt(req.params.id);

  employees = employees.filter((emp) => emp.id !== id);

  res.json({ message: "Employee deleted successfully" });
});

// Start server
app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});