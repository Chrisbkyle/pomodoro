import React, {createContext, useReducer, useContext} from 'react';
import pomoReducer, {initialState} from './PomoReducer'

const PomoContext = createContext(initialState); 

export const PomoProvider = ({children}) => {
    const [state, dispatch] = useReducer(pomoReducer, initialState)

    function displayUser(prop) {
        const {username, email, previousToDo} = prop
            // state.user = prop.username,
            // state.email = prop.email,
            // state.previousToDo = prop.previousTodo
        const activeUser = {
            user: username,
            email: email,
            previousToDo: previousToDo
        }

        // const activeUser = state.user
        // console.log(activeUser)

        dispatch({
            type: "USER_LOGGED_IN",
            payload: activeUser
        })
    }


    const value = {
        user: state.user,
        displayUser
    }

    // console.log(value)

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