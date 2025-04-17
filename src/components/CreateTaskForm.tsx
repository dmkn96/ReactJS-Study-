import '../styles/index.css';
import { useState } from "react";
import { Task } from '../types/task';

interface CreateTaskContainerProps {
    sectionStatusList: {
        createTask: boolean;
        tasks: boolean;
        completedTasks: boolean;
    };
    toggleSection: (section: keyof typeof sectionStatusList) => void;
    addTask: (task: Task) => void;
}

interface CreateTaskFormProps {
    addTask: (task: Task) => void;
}

const CreateTaskContainer = ({ sectionStatusList, toggleSection, addTask }: CreateTaskContainerProps) => {
    return (
        <div className="task-container">
            <h1>Create Task</h1>
            <button className={`close-button ${sectionStatusList.createTask ? 'open' : ""}`} onClick={() => toggleSection('createTask')}>+</button>
            {sectionStatusList.createTask && <CreateTaskForm addTask={addTask}/>}
        </div>
    )
}

const CreateTaskForm = ({ addTask }: CreateTaskFormProps) => {
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState<Task['priority']>("low");
    const [deadline, setDeadline] = useState<Date>(new Date());

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim() && deadline) {
            addTask({ 
                title, 
                priority, 
                deadline,
                completed: false,
                id: Date.now().toString()
            });
            setTitle("");
            setDeadline(new Date());
            setPriority("low");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input      
                type="text" 
                name="title" 
                id="title" 
                placeholder="Task Name" 
                required 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <select 
                value={priority} 
                onChange={(e) => setPriority(e.target.value as Task['priority'])}
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <input 
                type="datetime-local" 
                value={deadline.toISOString().slice(0, 16)}
                onChange={(e) => setDeadline(new Date(e.target.value))}
                required
            />
            <button type="submit">Add Task</button>
        </form>        
    )
}
export default CreateTaskContainer;