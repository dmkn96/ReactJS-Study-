import '../styles/index.css';

const TaskForm = () => {
    return (
        <form action="" className="task-form">
            <input type="text" name="" id="" placeholder="Task Name" required/>
            <select value={"Low"} >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <input type="datetime-local" value={new Date().toISOString().slice(0, 16)} required/>
        </form>        
    )
}

export default TaskForm;