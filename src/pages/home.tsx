import '../styles/index.css';

import { useState } from 'react';
import { Task } from '../types/task';

import Footer from '../components/Footer';
import TaskListContainer from '../components/TaskList';
import CreateTaskContainer from '../components/CreateTaskForm';
import ComplitedTaskListContainer from '../components/ComplitedTaskList';


const Home = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [sectionStatusList, setSectionStatusList] = useState({
        createTask: true,
        tasks: true,
        completedTasks: false,
    });
    
    const toggleSection = (section: keyof typeof sectionStatusList) => {
        setSectionStatusList((prev) => ({
            ...prev,
            [section]: !prev[section]
        }));
    }

    const addTask = (task: Task) => {
        setTasks([...tasks, {...task, completed: false, id: Date.now().toString()}]);
    }

    const setPriority = (taskId: string, priority: Task['priority']) => {
        setTasks(tasks.map(task => 
            task.id === taskId ? { ...task, priority: priority } : task
        ));
    }

    const activeTasks = tasks.filter(task => !task.completed);
    const completedTasks = tasks.filter(task => task.completed);
    
    return (
        <div className="app">
            <CreateTaskContainer 
                sectionStatusList={sectionStatusList}
                toggleSection={toggleSection}
                addTask={addTask}
            />
            <TaskListContainer
                sectionStatusList={sectionStatusList}
                toggleSection={toggleSection}
                activeTasks={activeTasks}
                setPriority={setPriority}
            />
            <ComplitedTaskListContainer
                sectionStatusList={sectionStatusList}
                toggleSection={toggleSection}
                tasks={completedTasks}
                setPriority={setPriority}
            />
            <Footer />
        </div>
    );
}

export default Home;