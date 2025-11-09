import React, { useState } from "react";
import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";

function Dashboard() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const toggleTask = (index) => {
        const updated = [...tasks];
        updated[index].done = !updated[index].done;
        setTasks(updated);
    };

    return (
        <div>
            <Navbar />
            <h2 style={{ textAlign: "center" }}>My Love Tasks</h2>
            <TaskForm addTask={addTask} />
            <div style={{ maxWidth: "450px", margin: "20px auto" }}>
                {tasks.map((task, index) => (
                    <TaskItem
                        key={index}
                        task={task}
                        toggleTask={() => toggleTask(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
