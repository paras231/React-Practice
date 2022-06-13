import { createContext, useReducer, useEffect } from "react";
import { themeReducer } from "./Reducer";

const initialState = {
  darkMode: JSON.parse(localStorage.getItem("darkMode")),
};

// create a context
export const ThemeContext = createContext(initialState);

// create a provider which will be used to wrap our app
export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
  }, [state]);
  return (
    <ThemeContext.Provider
      value={{
        state, 
        dispatch,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
