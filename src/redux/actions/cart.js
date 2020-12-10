import { ADD_CART } from '../types/cart'

export const addToCart = (article) => dispatch => {
  console.log(article);
  return dispatch({
    type: ADD_CART,
    payload: article
  })
}