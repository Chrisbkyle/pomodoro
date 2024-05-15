export const initialState = {
    user: {
        username: '',
        email: '',
        currentToDo: [],
        previousToDo: []
    }
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
    }
}

export default pomoReducer;