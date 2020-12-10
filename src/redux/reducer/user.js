import { LOGIN_USER, REGSITER_USER } from '../types/user'

const initialState = {
  username: '',
  email: ''
};

const user = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_USER:
      // Call api login 
      // Set token
      // Res
      state.username = action.payload.username
      console.log('CALL LOGIN', action.payload)
      return state;
    case REGSITER_USER:
      return initialState
    default:
      return state;
  }
};

export default user;