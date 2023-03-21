import { ActionTypes } from "../contants/action-types";

const initialState = {
  products: {
    id: 1,
    title: "Ansh",
    category: "Programmer",
  },
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    case ActionTypes.SELECTED_PRODUCT:
      return state;
    default:
      return state;
  }
};
