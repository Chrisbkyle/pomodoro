export const initialState = {
    user: {
        username: '',
        email: '',
        currentToDo: [],
        previousToDo: []
    },
    currentToDo: []
}

const pomoReducer = (state, action) => {
    const {type, payload} = action;

    switch(type) {
        case "USER_LOGGED_IN":
            console.log("USER_LOGGED_IN", payload);
            return{
                ...state,
                user: payload
            }
        case "UPDATE_TODO" :
            console.log("UPDATE_TODO", payload);
            return{
                ...state,
                currentToDo: payload
            }
        case "EDIT_TODO_ITEM" :
            console.log("EDIT_TODO_ITEM", payload)
            return{
                ...state,
                currentToDo: payload
            }
    }
}

export default pomoReducer;