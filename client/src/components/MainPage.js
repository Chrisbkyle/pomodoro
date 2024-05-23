import React, {useState, useEffect} from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import NavContainer from './NavContainer';
import Description from './Description';
import Title from './Title';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import TomatoTimer from './TomatoTimer';
import TimerSettings from './TimerSettings';
import usePomo from './PomoContext';

const MainPage = (props) => {
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
        <button onClick={e => handleClick()}>Click</button>
        <Title />
        <SignupForm />
        <LoginForm />
        {renderOnLogin()}
    </div>
  );
};

export default MainPage
