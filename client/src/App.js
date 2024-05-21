import './App.css';
import { PomoProvider } from './components/PomoContext'
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import NavContainer from './components/NavContainer';
import Description from './components/Description';
import Title from './components/Title';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import TomatoTimer from './components/TomatoTimer';
import TimerSettings from './components/TimerSettings';



function App() {
  return (
    <div className="App">
      <PomoProvider>
        <Title />
        <SignupForm />
        <LoginForm />
        <ToDoList />
        <ToDoForm />
        <TomatoTimer />
        <TimerSettings />
      </PomoProvider>
    </div>
  );
}

export default App;
