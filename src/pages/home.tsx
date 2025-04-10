import '../styles/index.css';
import Footer from '../components/footer';
import TaskList from '../components/taskList';
import TaskForm from '../components/taskForm';
import ComplitedTaskList from '../components/complitedTaskList';

const Home = () => {
    return (
        <div className="app">
            <div className="task-container">
                <h1>Create Task</h1>
                <button className="close-button open">+</button>
                <TaskForm />
            </div> 

            <div className="task-container">
                <h1>Tasks</h1>
                <button className="close-button open">+</button>
                <div className="sort-controlls">
                    <button className="sort-button">
                        By Date
                    </button>
                    <button className="sort-button">
                        By Priority
                    </button>
                </div>
                <TaskList />
            </div>

            <div className="completed-task-container">
                <h1>Completed Tasks</h1>
                <button className="close-button open">+</button>
                <ComplitedTaskList />
            </div>
            <Footer />
        </div>
    );
}

export default Home;