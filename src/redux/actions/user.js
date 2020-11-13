import { LOGIN_USER } from "../types/user"

export default {
  login: (email, password) => {
    return {
      type: LOGIN_USER,
      payload: {
        email: email,
        password: password
      }
    }
  }
}