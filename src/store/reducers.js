import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./actions.js";

const initialState = {
  products: [],
  favorites: JSON.parse(localStorage.getItem("favorite")) || [],
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  isModal: false,
  totalPrice: JSON.parse(localStorage.getItem("totalPrice")) || 0,
};

export default createReducer(initialState, {
  [actions.actionAddProducts]: (state, { payload }) => {
    state.products = payload;
  },

  [actions.actionAddToFavotites]: (state, { payload }) => {
    const findObj = state.favorites.find((obj) => obj.id === payload.id);
    if (!findObj || findObj.length === 0) {
      localStorage.setItem(
        "favorite",
        JSON.stringify([...state.favorites, payload])
      );
      state.favorites = [...state.favorites, payload];
    } else {
      const filterFevorites = state.favorites.filter(
        (obj) => obj.id !== payload.id
      );
      localStorage.setItem("favorite", JSON.stringify(filterFevorites));
      state.favorites = [...filterFevorites];
    }
  },

  [actions.actionAddToCart]: (state, { payload }) => {
    const findCart = state.cart.find((obj) => obj.id === payload.id);

    if (!findCart || findCart.length === 0) {
      state.cart = [...state.cart, { ...payload, count: 1 }];

      state.totalPrice = state.cart.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    } else {
      findCart.count++;
      state.totalPrice = state.cart.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    }
  },

  [actions.actionMinusFromCart]: (state, { payload }) => {
    const findItem = state.cart.find((obj) => obj.id === payload.id);
    findItem.count--;
    if (findItem.count < 1) {
      findItem.count = 1;
    }
    state.totalPrice = state.totalPrice - findItem.price;
  },

  [actions.actionDeleteItem]: (state, { payload }) => {
    const findItem = state.cart.find((obj) => obj.id === payload.id);

    state.totalPrice = state.totalPrice - findItem.price * findItem.count;
    findItem.count--;

    const filterArr = state.cart.filter((obj) => obj.id !== payload.id);
    localStorage.setItem("cart", JSON.stringify(filterArr));
    state.cart = [...filterArr];
  },

  [actions.actionHandelModal]: (state) => {
    state.isModal = !state.isModal;
  },
  [actions.actionClearCart]: (state) => {
    state.cart = [];
    state.totalPrice = 0;
  },
});
