export const loginAction = (username) => dispatch => {
    dispatch({
        type: 'LOGIN',
        loggedIn: true, 
        un: username
    })
}