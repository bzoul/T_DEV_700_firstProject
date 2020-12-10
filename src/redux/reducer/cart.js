import { ADD_CART, REMOVE_ARTICLE } from '../types/cart'

const initialState = {
  cart: []
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
      console.log(state.cart);
      return state;
    default:
      return state;
  }
};

export default cart;