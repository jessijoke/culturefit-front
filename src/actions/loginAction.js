export const loginAction = (username) => dispatch => {
    dispatch({
        type: "LOGIN",
        loggedIn: true, 
        un: username
    })
}

export const logoutAction = (username) => dispatch => {
    dispatch({
        type: "LOGOUT",
        loggedIn: false, 
        un: username
    })
}