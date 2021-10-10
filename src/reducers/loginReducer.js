export default (state = { loggedIn: false, name: "" }, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                loggedIn: action.loggedIn,
                name: action.un
            }
        default:
            return state;
    }
}