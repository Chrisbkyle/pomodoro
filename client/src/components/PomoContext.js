import React, {createContext, useReducer, useContext} from 'react';
import pomoReducer, {initialState} from './PomoReducer'

const PomoContext = createContext(initialState); 

export const PomoProvider = ({children}) => {
    const [state, dispatch] = useReducer(pomoReducer, initialState)



    //Log user Data from DB after Login
    function loginToggle(bool) {
        console.log('bool', bool)
        const newLoginStatus = bool
        
        dispatch({
            type: "LOGIN_TOGGLE",
            payload: newLoginStatus
        })
    }
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

        let toDoList = state.currentToDo;
        let newObject = state;
        
        toDoList[index].task = task 
        newObject['currentToDo'] = toDoList

        dispatch({
            type: "EDIT_TODO_ITEM",
            payload: newObject['currentToDo']
        })
    }

    //Set Focus and Break Time
    function setTimer(time, mode) {

        let newTime = +time
        let newState = state.timer

        newState[mode] = newTime
        dispatch({
            type: "SET_TIMER",
            payload: newState
        })
    }

    //Increase Timer Count by 1 when timer is finished
    function incrementTimerCount() {

        let newTimerCount = state.timer.timerCount
        let newObject = state.timer

        newObject.timerCount = newTimerCount + 1

        dispatch({
            type: "INCREMENT_TIMER_COUNT",
            payload: newObject
        })
    }


    const value = {
        user: state.user,
        currentToDo: state.currentToDo,
        timer: state.timer,
        isLoggedIn: state.isLoggedIn,
        loginToggle,
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