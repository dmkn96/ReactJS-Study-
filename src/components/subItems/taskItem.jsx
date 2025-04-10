import '../../styles/index.css';

const TaskItem = () => {
    return (
        <li className="task-item low">
            <div className="task-info">
                <div>
                    Title <strong>Medium</strong>
                </div>
                <div className="task-deadline"> 
                    Due: {new Date().toISOString()}
                </div>
            </div>
            <div className="task-buttons">
                <button className="complete-button">Complete</button>
                <button className="delete-button">Delete</button>
            </div>
        </li>
    )
}

export default TaskItem;