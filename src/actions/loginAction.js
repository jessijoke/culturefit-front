export const loginAction = (status, username) => dispatch => {
    dispatch({
        type: status,
        loggedIn: true, 
        un: username
    })
}