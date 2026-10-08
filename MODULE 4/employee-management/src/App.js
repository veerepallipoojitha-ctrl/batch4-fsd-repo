import React, { useEffect, useState } from "react";
import AddEmployee from "./components/AddEmployee";
import EmployeeSearch from "./components/EmployeeSearch";
import EmployeeList from "./components/EmployeeList";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/employees")
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const addEmployee = (employee) => {
    fetch("http://localhost:5000/api/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add employee");
        }
        return response.json();
      })
      .then((newEmployee) => {
        setEmployees((previousEmployees) => [
          ...previousEmployees,
          newEmployee,
        ]);
      })
      .catch((error) => {
        console.error("Error adding employee:", error);
        alert("Unable to add employee. Make sure the backend is running.");
      });
  };

  const deleteEmployee = (id) => {
    fetch(`http://localhost:5000/api/employees/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        setEmployees((previousEmployees) =>
          previousEmployees.filter((employee) => employee.id !== id)
        );
      })
      .catch((error) => console.error("Error:", error));
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header>
        <h1>Employee Management System</h1>
        <p>Employee Management REST API</p>
      </header>

      <main>
        <AddEmployee addEmployee={addEmployee} />

        <EmployeeSearch
          search={search}
          setSearch={setSearch}
        />

        <EmployeeList
          employees={filteredEmployees}
          deleteEmployee={deleteEmployee}
        />
      </main>
    </div>
  );
}

export default App;