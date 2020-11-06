const initialState = {
    isLoggedIn: false,
    dataLogin : {},
}

const authReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isLoggedIn: true,
                dataLogin: action.payload.dataLogin
            }
        // case "SAVETOREDUX":
        //     return {
        //         userListFromApp: [...initialState.userListFromApp, ...action.payload]
            // }
        case "LOGOUT":
            return {
                initialState
            }
        default:
            return state
        }
    }

export default authReducer