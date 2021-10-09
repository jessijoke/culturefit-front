export default (state = { loggedIn: false }, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                loggedIn: action.payload
            }
        default:
            return state;
    }
}