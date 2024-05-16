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
    function editTodoItem(index, task, stage) {
        let toDoList = state.currentToDo;
        toDoList[index] = {task: task, stage: stage}
        let newObject = state;
        newObject['currentToDo'] = toDoList
    
        console.log(newObject)

        dispatch({
            type: "EDIT_TODO_ITEM",
            payload: newObject['currentToDo']
        })
    }


    const value = {
        user: state.user,
        currentToDo: state.currentToDo,
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