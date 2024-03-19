export const Task = (props) => {
  return (
    <li key={props.idx}>
      <span
        onClick={() => props.completeTask(props.task)}
        style={{
          color: props.task.isComplete ? "green" : "red",
          cursor: "pointer",
        }}
      >
        {props.task.name}
      </span>

      {props.task.isEditing && (
        <div>
          <input
            type="text"
            value={props.task.name}
            onChange={(e) => props.updateTask(e.target.value, props.idx)}
          />
        </div>
      )}

      <button
        style={{ margin: "10px", cursor: "pointer" }}
        onClick={() => props.editTask(props.task)}
      >
        {props.task.isEditing ? "Done Editing" : "Edit Task"}
      </button>

      <button
        style={{ margin: "10px", cursor: "pointer" }}
        onClick={() => props.removeTask(props.idx)}
      >
        X
      </button>
    </li>
  );
};
