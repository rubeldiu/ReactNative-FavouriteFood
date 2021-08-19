import axios from "axios";
import * as actionTypes from "./actionTypes";
export const loadDishes = (dishes) => {
  return {
    type: actionTypes.LOAD_DISHES,
    payload: dishes,
  };
};
export const getDishes = () => (dispatch) => {
  axios
    .get(
      "https://reactnativeproject-c9dc7-default-rtdb.firebaseio.com/dishes.json"
    )
    .then((response) => dispatch(loadDishes(response.data)))
    .catch((err) => console.log(err));
};

export const addToFavourites = (dish) => {
  return {
    type: actionTypes.ADD_TO_FAVOURITES,
    payload: dish,
  };
};
export const removeToFavourites = (dish) => {
  return {
    type: actionTypes.REMOVE_TO_FAVOURITES,
    payload: dish,
  };
};
