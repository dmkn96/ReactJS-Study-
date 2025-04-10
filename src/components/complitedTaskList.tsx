import '../styles/index.css';
import TaskItem from './subItems/taskItem';

const ComplitedTaskList = () => {
    return (
        <ul className='completed-task-list'>
            <TaskItem />
        </ul>
    )
}

export default ComplitedTaskList;