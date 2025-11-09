import React, { useState } from "react";

function TaskForm({ addTask }) {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim()) return;
        addTask({ title, done: false });
        setTitle("My Love: ");
    };

    return (
        <form onSubmit={handleSubmit} style={{ textAlign: "center", marginTop: "20px" }}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Love Task"
            />
            <button type="submit" style={{ marginLeft: "10px" }}>Add Task</button>
        </form>
    );
}

export default TaskForm;

