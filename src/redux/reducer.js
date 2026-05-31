import { INCREMENT, DECREMENT, REMOVE_ITEM } from "./actions";

const initialState = {
  count: 0,
  cartItems: {}
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      const item = action.payload;
      if (!item) {
        return { ...state, count: state.count + 1 };
      }
      const key = item.title;
      const existing = state.cartItems[key];
      const updatedCartItems = {
        ...state.cartItems,
        [key]: {
          item,
          qty: existing ? existing.qty + 1 : 1
        }
      };
      const totalCount = Object.values(updatedCartItems).reduce((sum, curr) => sum + curr.qty, 0);
      return {
        ...state,
        count: totalCount,
        cartItems: updatedCartItems
      };
    }

    case DECREMENT: {
      const item = action.payload;
      if (!item) {
        return { ...state, count: Math.max(0, state.count - 1) };
      }
      const key = item.title;
      const existing = state.cartItems[key];
      if (!existing) return state;

      const updatedCartItems = { ...state.cartItems };
      if (existing.qty === 1) {
        delete updatedCartItems[key];
      } else {
        updatedCartItems[key] = {
          ...existing,
          qty: existing.qty - 1
        };
      }
      const totalCount = Object.values(updatedCartItems).reduce((sum, curr) => sum + curr.qty, 0);
      return {
        ...state,
        count: totalCount,
        cartItems: updatedCartItems
      };
    }
    case REMOVE_ITEM: {
      const item = action.payload;
      if (!item) return state;
      const key = item.title;
      const updatedCartItems = { ...state.cartItems };
      delete updatedCartItems[key];
      const totalCount = Object.values(updatedCartItems).reduce((sum, curr) => sum + curr.qty, 0);
      return {
        ...state,
        count: totalCount,
        cartItems: updatedCartItems
      };
    }



    default:
      return state;
  }
};