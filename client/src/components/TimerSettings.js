import React, {useState} from "react"
import usePomo from "./PomoContext";

const TimerSettings = (props) => {

    const {setTimer} = usePomo();
    const [isTraditonal, setIsTraditional] = useState();
    const [focusTime, setFocusTime] = useState(5 *  60);
    const [shortBreak, setShortBreak] = useState();
    const [longBreak, setLongBreak] = useState();
    const [timerConfig, setTimerConfig] = useState({
        pomodoroTime: 5 * 60,
        shortBreak: 5 * 60,
        longBreak: 5 * 60,
   })
    const timeOptions = [5,10,15,20,25,30,35,40,45,50,55,60]

    const handleFocusSet = (e) => {
        setFocusTime(e.target.value * 60)
        console.log(e.target.value * 60)
    }

    const handleShortBreak = (e) => {
        setShortBreak(e.target.value * 60)
        console.log(e.target.value * 60)
    }

    const handleLongBreak = (e) => {
        setLongBreak(e.target.value * 60)
        console.log(e.target.value * 60)
    }

    const handleChange = (e) => {

    }

    const handleRadio = (e) => {
        console.log(e.target.value)
        e.target.value === 'classic' ? setIsTraditional(true) : setIsTraditional(false)
    }

  return (
    <div>
        <form>
            <div>
                <label>Classic Pomodoro</label>
                <input type='radio' value='classic' name='timerType' onClick={e => handleRadio(e)}></input>
                <label>Custom</label>
                <input type='radio' value='custom' name='timerType' onClick={e => handleRadio(e)}></input>
            </div>
            <div>
                <label>Focus Time </label>
                <select name='pomodoroTime' size='1.5' onChange={e => setTimer(e.target.value * 60)}>
                    {timeOptions.map((e) => (
                        <option value={e}>{e}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Short Break</label>
                <select name='shortBreak' size='1'onChange={e => handleShortBreak(e)}>
                    {timeOptions.map((e) => (
                        e <= 20 ? <option value={e}>{e}</option> : undefined
                    ))}
                </select>
            </div>
            <div>
                <label>Long Break</label>
                <select name='longBreak' size='1'onChange={e => handleLongBreak(e)}>
                    {timeOptions.map((e) => (
                        e >= 20 ? <option value={e}>{e}</option> : undefined
                    ))}
                </select>
            </div>
        </form>

      
    </div>
  )
};

export default TimerSettings
