export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const INCREMENT_ASYNC = "INCREMENT_ASYNC";

export const increment = (item) => ({ type: INCREMENT, payload: item });
export const decrement = (item) => ({ type: DECREMENT, payload: item });
export const removeItem = (item) => ({ type: REMOVE_ITEM, payload: item });
export const incrementAsync = () => ({ type: INCREMENT_ASYNC });