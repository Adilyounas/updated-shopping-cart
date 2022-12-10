import { createReducer } from "@reduxjs/toolkit";
const data = JSON.parse(localStorage.getItem("dataArray"))
export const firstReducer = createReducer(
  data?data:{
    cartPageArray: [],
    subTotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  },
  {
    addToCarts: (state, action) => {
      const itemObject = action.payload;
      const finder = state.cartPageArray.find((i) => {
        return i.id === itemObject.id;
      });
      if (finder) {
        state.cartPageArray.forEach((i) => {
          if (i.id === itemObject.id) {
            i.quantity++;
          }
        });
      } else {
        state.cartPageArray.push(itemObject);
      }
    },

    increment: (state, action) => {
      const idOnIncrement = action.payload;
      const ids = state.cartPageArray.find((i) => i.id === idOnIncrement);
      if (ids) {
        state.cartPageArray.forEach((i) => {
          if (i.id === idOnIncrement) {
            i.quantity++
          }
        })
      }
    },

    decrement: (state, action) => {
      const idOnIncrement = action.payload;
      const ids = state.cartPageArray.find((i) => i.id === idOnIncrement);
      if (ids) {
        state.cartPageArray.forEach((i) => {
          if (i.id === idOnIncrement) {
            if (i.quantity > 1) {
              i.quantity--
              
            }
          }
        })
      }
    },

    deleted: (state, action) => {
      const idOnIncrement = action.payload;
      const id = state.cartPageArray.find((i) => i.id === idOnIncrement);
      if (id) {
        state.cartPageArray = state.cartPageArray.filter((i) => {
          return i.id !== idOnIncrement
        })
      }

    },

    calculates: (state, action) => {
      let sum = 0;
      state.cartPageArray.forEach((i) => (sum = sum + i.quantity * i.price))
      state.subTotal = sum
      state.shipping = state.subTotal < 2000 ? 150 : 0
      state.tax = +(state.subTotal * 0.15).toFixed()
      state.total = state.subTotal + state.shipping + state.tax
    }





  }
);

export default firstReducer;
