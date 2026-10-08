function EmployeeList({ employees, deleteEmployee }) {

  return (
    <div className="list-container">

      <h2>Employee List</h2>

      {employees.length === 0 ? (
        <p className="no-data">
          No employees found
        </p>
      ) : (

        <table>

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {employees.map((employee) => (
              <tr key={employee.id}>

                <td>{employee.id}</td>

                <td>{employee.name}</td>

                <td>{employee.email}</td>

                <td>{employee.department}</td>

                <td>₹{employee.salary}</td>

                <td>
                  <button
                    className="delete-button"
                    onClick={() =>
                      deleteEmployee(employee.id)
                    }
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      )}

    </div>
  );
}

export default EmployeeList;