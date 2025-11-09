import React from "react";

function TaskItem({ task, toggleTask }) {
    return (
        <div
            onClick={toggleTask}
            style={{
                margin: "5px 0",
                padding: "10px",
                background: task.done ? "#d4edda" : "#f8d7da",
                cursor: "pointer",
                borderRadius: "10px",
            }}
        >
            {task.title}
        </div>
    );
}

export default TaskItem;