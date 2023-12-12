import { createAction } from "@reduxjs/toolkit";

import { sendRequest } from "../helpers/sendRequst";

export const actionAddProducts = createAction("ACTION_ADD_PRODUCTS");
export const actionAddToFavotites= createAction("ACTION_ADD_TO_FAVOTITES");
export const actionAddToCart= createAction("ACTION_ADD_TO_CART");
export const actionHandelModal= createAction("ACTION_HANDEL_MODAL");
export const actionMinusFromCart= createAction("ACTION_MINUS_FROM_CART");
export const actionClearCart= createAction("ACTION_CLEAR_CART");
export const actionDeleteItem = createAction("ACTION_DELETE_ITEM");


export const actionFetchProducts = () => (dispatch) => {
  return (sendRequest('products.json').then((results) => {
    dispatch(actionAddProducts(results));
  }))
};

