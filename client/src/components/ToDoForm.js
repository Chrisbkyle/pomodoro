import React, { useState, useEffect } from "react"
import usePomo from "./PomoContext";


const ToDoForm = (props) => {

  const {user, addToDo} = usePomo()

  const [newToDo, setNewToDo] = useState()

  const handleChange = (e) => {
    setNewToDo(e.target.value)
  }
  const handleClick = (e) => {
    e.preventDefault()
    addToDo(newToDo)
  }

  return (
    <div>
      <form>
        <label><input name='task' value={newToDo} placeholder='Add a Task' onChange={e => handleChange(e)}></input></label>
        <button type='click' onClick={e => handleClick(e)}>Add Task</button>
      </form>
    </div>
  )
};

export default ToDoForm
