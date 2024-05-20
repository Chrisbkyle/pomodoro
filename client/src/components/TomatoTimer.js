import React, {useState, useEffect} from "react"

const twoDigits = (num, digit) => {
  num = `${num}`
  while (digit - num.length > 0) {
    return num = `0${num}`;
  }
  return num
}

const TomatoTimer = (props) => {


  const [time, setTime] = useState(965);
  const [seconds, setSeconds] = useState(twoDigits(time % 60, 2));
  const [minutes, setMinutes] = useState(Math.floor(time / 60));
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      if(!isActive || time <= 0) return;
      setTime(time - 1)
    }, 1000);
    
    return () => clearInterval(id);
  }, [time, isActive]);



  useEffect(() => { 

    setMinutes(Math.floor(time / 60))
    setSeconds(twoDigits(time % 60, 2))
    
    console.log(minutes, seconds)
  }, [time])


const toggleIsActive = () => {
  !isActive ? setIsActive(true) : setIsActive(false)
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
      <div>{minutes}: {seconds}</div>
      <button onClick={() => toggleIsActive()}>Timer Button</button>
    </div>
  )
};

export default TomatoTimer
