import '../styles/index.css';
import TaskItem from './subItems/taskItem';

const TaskList = () => {
    return (
        <ul className="task-list">
            <TaskItem />
        </ul>
    )
}


export default TaskList;