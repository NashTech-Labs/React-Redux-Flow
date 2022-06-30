import * as types from "../action/types";

const initialState = {
  userData: {},
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.Form_Data:
      return { ...state, userData: action.payload };
    default:
      return state;
  }
};
