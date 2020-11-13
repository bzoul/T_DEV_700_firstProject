import { LOGIN_USER, REGSITER_USER } from '../types/user'

const initialState = {
  username: '',
  email: ''
}

const user = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_USER:
      // Login user

      // Make api call with action.payload (username + password) & get response of api
      // Here there is fake return data from api
      const user = {
        username: 'lol',
        email: 'lol@lol.fr'
      }

      // Return user logged via api to reducer
      return ({...state, user})
    case REGSITER_USER:
      // Register user via api
      // Make api call with action.payload (username + password) & get response of api
      // Here there is fake return data from api
      const user = {
        username: 'lol',
        email: 'lol@lol.fr'
      }

      // Return user logged via api to reducer
      return ({...state, user})
  }
}

export default user;