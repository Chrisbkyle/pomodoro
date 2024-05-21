import React, {useState, useEffect} from "react"
import usePomo from "./PomoContext";

const twoDigits = (num, digit) => {
  num = `${num}`
  while (digit - num.length > 0) {
    return num = `0${num}`;
  }
  return num
}

const TomatoTimer = () => {

  const {timer, setTimer, incrementTimerCount} = usePomo();
  const [mode, setMode] = useState();
  const [remainingSeconds, setRemainingSeconds] = useState(timer[mode])
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if(isActive){    
      if (remainingSeconds == 0) {
        console.log('triggered')
        setIsActive(false)
        incrementTimerCount()
      }
    const id = setInterval(() => {
      console.log(remainingSeconds)
      if(!isActive || remainingSeconds <= 0) return;
      setRemainingSeconds(remainingSeconds - 1)
    }, 1000);
    
    return () => clearInterval(id);
  }}, [remainingSeconds, isActive]);

  useEffect(() => {
    setRemainingSeconds(timer[mode])
    if (timer.timerCount % 2 === 1 && timer.timerCount <= 7) {
      setMode('pomodoro')
    } else if (timer.timerCount % 2 === 0 && timer.timerCount <= 7) {
      setMode('shortBreak')
    } else {
      setMode('longBreak')
    }
  }, [timer[mode], isActive])


const startOrFinish = () => {
  !isActive ? setIsActive(true) : setIsActive(false)
}
const timerRender = () => {
  const seconds = twoDigits(remainingSeconds % 60, 2);
  const minutes = Math.floor(remainingSeconds / 60);
  if(seconds) {
    return <div>{minutes}: {seconds} {mode}</div>
  }
}

  //pomodoro timer breakdown
  // -------8hr 25min---------
  //25 mins - 5 min break x3
  //25 mins - 15 min break x1
  //25 mins - 5 min break x3
  //25 mins - 30 min break
  //25 mins - 5 min break x3
  //25 mins - 15 mins break x1
  //25 mins - 5 min break x3

  return (
    <div>
      <div>{timerRender()}</div>
      <button onClick={() => startOrFinish()}>{isActive ? 'Finish' : 'Start'}</button>
      <button onClick={() => setIsActive(false)}>Pause</button>
    </div>
  )
};

export default TomatoTimer
