import { ADD_CART, REMOVE_ARTICLE } from '../types/cart'

export const addToCart = (article) => dispatch => {
  return dispatch({
    type: ADD_CART,
    payload: article
  })
}

export const removeFromCart = (article) => dispatch => {
  return dispatch({
    type: REMOVE_ARTICLE,
    payload: article
  })
}