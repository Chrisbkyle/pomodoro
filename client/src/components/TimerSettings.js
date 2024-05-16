import React, {useState} from "react"

const TimerSettings = (props) => {


    const [isTraditonal, setIsTraditional] = useState();
    const [focusTime, setFocusTime] = useState();
    const [shortBreak, setShortBreak] = useState();
    const [longBreak, setLongBreak] = useState();

    const handleFocusSet = (e) => {

    }

    const handleShortBreak = (e) => {

    }

    const handleLongBreak = (e) => {

    }

  return (
    <div>
        <label>Classic Pomodoro or Custom<input type='radio'></input></label>
        <label>Focus Time <input type='number' min='15' max='45'></input>
        </label>

      
    </div>
  )
};

export default TimerSettings
