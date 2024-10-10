import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Do IT!
        </p>
      </header>
      <TaskForm/>
      <TaskList/>
    </div>
  );
}

export default App;
