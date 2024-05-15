import React, {useState, useEffect} from "react"
import usePomo from "./PomoContext";

const ToDoList = (props) => {

  const {user} = usePomo()

  let [state, setState] = useState([])

  useEffect(() => {
    setState(user.previousToDo)
  })

  console.log(usePomo())

  const handleClick = () => {
    console.log(state)
  }
  return (
    <div>
        <ul>
          {state.map((e, index) => {
            return(
              <>
                <div>{index + 1}. {e}</div>
              </>)
            
          })}
          {/* <li>{user.user}</li> */}
          <button onClick={e => handleClick(e)}>Click</button>
        </ul>
    </div>
  )
};

export default ToDoList
