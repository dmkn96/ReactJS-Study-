import '../../styles/index.css';

const TaskItem = ({ task, setPriority }) => {
    return (
        <li className={`task-item ${task.priority}`}>
            <div className="task-info">
                <div>
                    {task.title}
                </div>
                <div className="task-deadline"> 
                    Due: {task.deadline?.toISOString()}
                </div>
            </div>
            <div className="task-buttons">
                <button className="complete-button">Complete</button>
                <button className="delete-button">Delete</button>
                <select 
                    className="task-priority" 
                    value={task.priority} 
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
        </li>
    )
}

export default TaskItem;