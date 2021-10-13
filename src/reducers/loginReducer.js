export default (state = { loggedIn: false, name: "" }, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {...state,
                loggedIn: action.loggedIn,
                name: action.un
            }
        case 'LOGOUT':
                return {...state,
                    loggedIn: action.loggedIn,
                    name: action.un
                }
        default:
            return state;
    }
}