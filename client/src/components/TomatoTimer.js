import React, {useState} from "react"

const TomatoTimer = (props) => {

  const [timer, setTimer] = useState();
  const [timerDuration, setTimerDuration] = useState();
  const [isTraditional, setIsTraditional] = useState(true);

  const timerLength = () => {
    const pomodoroOrder = [25, 5, 25, 5, 25, 5, 25, 15, 25, 5, 25, 5, 25, 5, 25, 30, 25, 5, 25, 5, 25, 5, 25, 15, 25, 5, 25, 5, 25, 5]

    pomodoroOrder.map((e) => {
      console.log(e)
    })
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
        <button onClick={e => timerLength(e)}>Timer Button</button>
    </div>
  )
};

export default TomatoTimer
