import './App.css';
import React, {useState, useEffect} from 'react';
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
import usePomo from './components/PomoContext';



function App() {

  const {isLoggedIn} = usePomo()

  const handleClick = (e) => {
    console.log(isLoggedIn)
  }

  const renderOnLogin = () => {
    if(isLoggedIn) {
      return(
        <>
          <ToDoList />
          <ToDoForm />
          <TomatoTimer />
          <TimerSettings />
          <Description />
        </>
      )
    }
  }
  return (
    <div className="App">
      <PomoProvider>
        <button onClick={e => handleClick()}>Click</button>
        <Title />
        <SignupForm />
        <LoginForm />
        {renderOnLogin()}

      </PomoProvider>
    </div>
  );
}

export default App;
