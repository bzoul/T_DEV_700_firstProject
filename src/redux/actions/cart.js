import { ADD_CART, REMOVE_ARTICLE, REMOVE_ONE, SET_TOTAL } from '../types/cart'

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

export const removeOneItemFromCart = (article) => dispatch => {
  return dispatch({
    type: REMOVE_ONE,
    payload: article
  })
}

export const setTotalPrice = (price) => dispatch => {
  return dispatch({
    type: SET_TOTAL,
    payload: price
  })
}