// in this file we create reducer using switch case of js
// reducer is basically a function which takes state and action as input and returns new state
// state ,action are passed as parameter to reducer
export const themeReducer = (state = {}, action) => {
  switch (action.type) {
    case "LIGHT_MODE":
      return {darkMode: false};
    case "DARK_MODE":
      return {darkMode:true};
    default:
      return state;
  }
};
