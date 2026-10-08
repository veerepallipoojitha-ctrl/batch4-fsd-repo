import React, { useState } from "react";

function AddEmployee({ addEmployee }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !department || !salary) {
      alert("Please fill all fields");
      return;
    }

    const employee = {
      name,
      email,
      department,
      salary: Number(salary),
    };

    addEmployee(employee);

    setName("");
    setEmail("");
    setDepartment("");
    setSalary("");
  };

  return (
    <div className="form-container">
      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Employee Name</label>
          <input
            type="text"
            placeholder="Enter employee name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="form-row">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter employee email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="form-row">
          <label>Department</label>
          <select
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
          >
            <option value="">Select Department</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
          </select>
        </div>

        <div className="form-row">
          <label>Salary</label>
          <input
            type="number"
            placeholder="Enter salary"
            value={salary}
            onChange={(event) => setSalary(event.target.value)}
          />
        </div>

        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default AddEmployee;