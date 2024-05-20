import React, {useState} from "react"

const TimerSettings = (props) => {


    const [isTraditonal, setIsTraditional] = useState();
    const [focusTime, setFocusTime] = useState();
    const [shortBreak, setShortBreak] = useState();
    const [longBreak, setLongBreak] = useState();
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
                <select size='1.5' onChange={e => handleFocusSet(e)}>
                    {timeOptions.map((e) => (
                        <option value={e}>{e}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Short Break</label>
                <select size='1'onChange={e => handleShortBreak(e)}>
                    {timeOptions.map((e) => (
                        e <= 20 ? <option value={e}>{e}</option> : undefined
                    ))}
                </select>
            </div>
            <div>
                <label>Long Break</label>
                <select size='1'onChange={e => handleLongBreak(e)}>
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
