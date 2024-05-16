import React , {useState, useEffect}from "react"
import usePomo from "./PomoContext";


const ToDoItem = ({index, task, stage}) => {
  console.log(task)

  const {editTodoItem} = usePomo()

  const [toDoStage, setToDoStage] = useState(stage);
  const [toDoTask, setToDoTask] = useState(task);
  const [edit, setEdit] = useState(false)
  // console.log(task)

  useEffect(() => {
    // setToDoTask(task)
  }, [])

  // const handleEdit = (e) => {

  // }
 
  const handleStageChange = (e) => {
    if(toDoStage === 'Ready to Start') {
      setToDoStage('On the Go')
    } else if (toDoStage === 'On the Go') {
      setToDoStage('Finished!')
    } else if (toDoStage === 'Finished!') {
      setToDoStage('Ready to Start')
    } 
  }
   const handleToggle = (e) => {
    edit ? setEdit(false) : setEdit(true)
   }

   const handleDoubleClick = (e) => {
    console.log('you double clicked')
   }

  const handleChange = (e) => {
    setToDoTask(e.target.value)
    editTodoItem(index, task, stage)
  }

  return (
    <div>
      {!edit ? (
      <div 
      style={{border: '1px solid black'}} 
      onClick={e => handleToggle(e)}
      >{index + 1}. {toDoTask}</div>
      ):(
      <>
        <input onChange={e => handleChange(e)} value={task}></input><button 
        onClick={e => handleToggle(e)}
        >save</button>
      </>
    )}
    <span onClick={e => handleStageChange(e)}>{toDoStage}</span>
    </div>
  )
};

export default ToDoItem
