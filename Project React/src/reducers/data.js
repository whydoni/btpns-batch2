const initialState = {
    isLoggedIn: false,
    dataUsers:[]
}

const fetchData = (state = initialState, action) => {

    switch (action.type) {
        case "FETCH":
            return {
                dataUsers:action.payload.dataUsers
            }
        case "REGISTER":
            return {
                ...state,
                dataUsers: [...state.dataUsers, action.payload.dataRegister]
            }
        case "DELETE":
            return {
                ...state,
                dataUsers: state.dataUsers.filter((item, index) => index !== action.payload),
            }
        default:
            return state
    }
}

export default fetchData
