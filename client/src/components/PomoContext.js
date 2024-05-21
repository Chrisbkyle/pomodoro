import React, {createContext, useReducer, useContext} from 'react';
import pomoReducer, {initialState} from './PomoReducer'

const PomoContext = createContext(initialState); 

export const PomoProvider = ({children}) => {
    const [state, dispatch] = useReducer(pomoReducer, initialState)


    //Log user Data from DB after Login
    async function displayUser(prop) {
        const newObject = await prop
        const oldObject = state.user
        for (const[key, value] of Object.entries(newObject)) {
            oldObject[key] = value
        }
        dispatch({
            type: "USER_LOGGED_IN",
            payload: oldObject
        })
    }

    //Add Task to currentToDo
    function addToDo(prop) {
        const newEntry = {task: prop, stage: 'Ready to Start'};
        let newObject = state
        newObject['currentToDo'].push(newEntry)

        dispatch({
            type: "UPDATE_TODO",
            payload: newObject['currentToDo']
        })
    }
    
    //Edit ToDo Item task
    function editTodoItem(index, task) {

        //Edit Item within Array
        let toDoList = state.currentToDo;
        toDoList[index].task = task 
        //Edit State object with new array
        let newObject = state;
        newObject['currentToDo'] = toDoList

        dispatch({
            type: "EDIT_TODO_ITEM",
            payload: newObject['currentToDo']
        })
    }

    //Set Focus and Break Time
    function setTimer(time, mode) {
        console.log(time)
        let newTime = +time
        let newState = state.timer
        newState[mode] = newTime
        console.log(newState)
        dispatch({
            type: "SET_TIMER",
            payload: newState
        })

    }
    function incrementTimerCount() {
        let newTimerCount = state.timer.timerCount
        newTimerCount++
        let newObject = state.timer
        console.log(newTimerCount)
        newObject.timerCount = newTimerCount

        dispatch({
            type: "INCREMENT_TIMER",
            payload: newObject
        })

    }


    const value = {
        user: state.user,
        currentToDo: state.currentToDo,
        timer: state.timer,
        incrementTimerCount,
        setTimer,
        displayUser,
        addToDo,
        editTodoItem
    }

    return <PomoContext.Provider value={value}>{children}</PomoContext.Provider>

}

const usePomo = () => {
    const context = useContext(PomoContext);

    if(context === undefined) {
        throw new Error('usePomo must be used within PomoContext')
    }

    return context
}

export default usePomo