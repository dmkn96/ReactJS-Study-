import '../styles/index.css';
import { Task } from '../types/task';
import TaskItem from './SubItems/TaskItem';

interface TaskListProps {
    sectionStatusList: {
        createTask: boolean;
        tasks: boolean;
        completedTasks: boolean;
    };
    toggleSection: (section: keyof typeof sectionStatusList) => void;
    activeTasks: Task[];
    setPriority: (taskId: string, priority: string) => void;
}

interface TaskProps {
    activeTasks: Task[];
    setPriority: (taskId: string, priority: string) => void;
}

const TaskListContainer = ({ sectionStatusList, toggleSection, activeTasks, setPriority }: TaskListProps) => {
    return (
        <div className="task-container">
            <h1>Tasks</h1>
            <button className={`close-button ${sectionStatusList.tasks ? 'open' : ""}`} onClick={() => toggleSection('tasks')}>+</button>
            <div className="sort-controls">
                <button className="sort-button">
                    By Date
                </button>
                <button className="sort-button">
                    By Priority
                </button>
            </div>
            {sectionStatusList.tasks && <TaskList activeTasks={activeTasks} setPriority={setPriority} />}
        </div>
    )
}

const TaskList = ({ activeTasks, setPriority }: TaskProps) => {
    return (
        <ul className="task-list">
            {activeTasks.map((task) => (
                <TaskItem 
                    task={task} 
                    setPriority={(priority: Task['priority']) => setPriority(task.id, priority)} 
                />
            ))}
        </ul>
    )
}


export default TaskListContainer;