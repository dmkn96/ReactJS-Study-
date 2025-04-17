import '../styles/index.css';
import TaskItem from './SubItems/TaskItem';

interface ComplitedTaskListProps {
    sectionStatusList: {
        createTask: boolean;
        tasks: boolean;
        completedTasks: boolean;
    };
    toggleSection: (section: keyof typeof sectionStatusList) => void;
}

const ComplitedTaskListContainer = ({ sectionStatusList, toggleSection }: ComplitedTaskListProps) => {
    return (
        <div className="completed-task-container">
        <h1>Completed Tasks</h1>
            <button className={`close-button ${sectionStatusList.completedTasks ? 'open' : ""}`} onClick={() => toggleSection('completedTasks')}>+</button>
            {sectionStatusList.completedTasks && <ComplitedTaskList />}
        </div>
    )
}

const ComplitedTaskList = () => {
    return (
        <ul className='completed-task-list'>
            <TaskItem />
        </ul>
    )
}

export default ComplitedTaskListContainer;