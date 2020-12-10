// import apiManager from "../../http/apiManager";

import { LOGIN_USER } from "../types/user";

export const login = (name, password) => dispatch => {
    return dispatch({
      type: LOGIN_USER,
      payload: { username: 'lol', email: 'lol'}
    })
    // return apiManager.login(name, password).then((res) => {
    //     localStorage.setItem('access_token', res.data.token);
    //     return dispatch({
    //         type: LOGIN,
    //         payload: res.data.user
    //     })
    // }).catch(() => {
    //   // ERR
    // });
};

// export const logout = () => dispatch => {
//     localStorage.removeItem('access_token');
//     return dispatch({
//         type: LOGOUT
//     })
// };