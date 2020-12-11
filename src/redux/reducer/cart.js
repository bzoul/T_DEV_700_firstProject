import { ADD_CART, REMOVE_ARTICLE, REMOVE_ONE, SET_TOTAL } from '../types/cart'

const initialState = {
  cart: [],
  total: 0,
};

const cart = (state = initialState, action) => {
  switch(action.type) {
    case ADD_CART:
      const article = { ...action.payload, qty: 1 }
      let exist = -1;
      for(let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id === article.id)
          exist = i;
      }
      if (exist === -1)
        state.cart.push(article);
      else
        state.cart[exist].qty++
      return state;
    case REMOVE_ARTICLE:
      state.cart = state.cart.filter((elem) => elem.id !== action.payload.id)
      return state;
    case REMOVE_ONE:
      let index = -1;
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id == action.payload.id)
          index = i
      }
      if (index !== -1 && state.cart[index].qty > 0)
        state.cart[index].qty--;
      return state;
    case SET_TOTAL:
      state.total = action.payload;
      return state;
    default:
      return state;
  }
};

export default cart;