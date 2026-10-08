import { useState } from "react";

function EmployeeForm({ addEmployee, updateEmployee, editingEmployee, cancelEdit }) {

  const [name, setName] = useState(
    editingEmployee ? editingEmployee.name : ""
  );

  const [email, setEmail] = useState(
    editingEmployee ? editingEmployee.email : ""
  );

  const [department, setDepartment] = useState(
    editingEmployee ? editingEmployee.department : ""
  );

  const [salary, setSalary] = useState(
    editingEmployee ? editingEmployee.salary : ""
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const employee = {
      name,
      email,
      department,
      salary: Number(salary)
    };

    if (editingEmployee) {
      updateEmployee(editingEmployee.id, employee);
    } else {
      addEmployee(employee);
    }

    setName("");
    setEmail("");
    setDepartment("");
    setSalary("");
  };

  return (
    <div className="form-container">

      <h2>
        {editingEmployee
          ? "Edit Employee"
          : "Add Employee"}
      </h2>

      <form onSubmit={handleSubmit}>

        <label>Employee Name</label>

        <input
          type="text"
          placeholder="Enter employee name"
          value={name}
          onChange={(event) =>
            setName(event.target.value)
          }
          required
        />

        <label>Email</label>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) =>
            setEmail(event.target.value)
          }
          required
        />

        <label>Department</label>

        <select
          value={department}
          onChange={(event) =>
            setDepartment(event.target.value)
          }
          required
        >
          <option value="">
            Select Department
          </option>

          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
        </select>

        <label>Salary</label>

        <input
          type="number"
          placeholder="Enter salary"
          value={salary}
          onChange={(event) =>
            setSalary(event.target.value)
          }
          required
        />

        <div className="form-buttons">

          <button type="submit">
            {editingEmployee
              ? "Update Employee"
              : "Add Employee"}
          </button>

          {editingEmployee && (
            <button
              type="button"
              className="cancel-button"
              onClick={cancelEdit}
            >
              Cancel
            </button>
          )}

        </div>

      </form>

    </div>
  );
}

export default EmployeeForm;