import React, {useState, useEffect} from "react"
import usePomo from "./PomoContext";
import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {

  const {user, currentToDo} = usePomo()

  let [previousToDo, setPreviousToDo] = useState([user.previousToDo])
  let [current, setCurrent] = useState([currentToDo])

  useEffect(() => {
    setPreviousToDo(user.previousToDo)
    setCurrent(currentToDo)
  }, [user.previousToDo, currentToDo])

  const handleClick = () => {
    console.log(user.previousToDo)
  }
  return (
    <div>
      <h3>Current ToDo</h3>
        {currentToDo.map((e, index) => (
            <ToDoItem index={index} task={e.task} stage={e.stage} />
        ))}
      <h3>Previous ToDo</h3>
        {previousToDo.map((e, index) => {
          return(
            <ToDoItem index={index} task={e.task} stage={e.stage} />
          )
        })}
        {/* <li>{user.user}</li> */}
        <button onClick={e => handleClick(e)}>Click</button>
    </div>
  )
};

export default ToDoList
