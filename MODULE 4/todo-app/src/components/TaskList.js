function TaskList({ tasks }) {
  return (
    <div>
      <h1>Task Manager App</h1>
      <h2>Todo List</h2>

      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.name} - {task.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;