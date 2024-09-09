import { ADD_TO_CART } from "./Constants";
import { REMOVE_FROM_CART } from "./Constants";
import { USER_LIST } from "./Constants";

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    data: item,
  };
}

export function removeFromCart(item) {
  return {
    type: REMOVE_FROM_CART,
    data: item,
  };
}

export function getUserList(item) {
  return {
    type: USER_LIST,
  };
}
