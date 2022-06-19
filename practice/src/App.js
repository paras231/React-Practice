import React, { useContext, Suspense } from "react";
import Testing3 from "./Components/Testing3";
import { ThemeContext } from "./Context/ThemeContext";
import Fetching from "./Components/Fetching";
import HooksPractice from "./Components/HooksPractice";
import Search from "./Components/Search";
// import CropList from "./Components/CropList";
import "./App.css";

const App = () => {
  // dark theme logic

  const theme = useContext(ThemeContext);

  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    if (darkMode) {
      theme.dispatch({
        type: "LIGHT_MODE",
      });
    } else {
      theme.dispatch({
        type: "DARK_MODE",
      });
    }
  };
  console.log(darkMode);

  return (
    <>
      <div
        style={{ margin: 0, padding: 0 }}
        className={darkMode ? "dark" : "light"}
      >
       <Fetching />
      </div>
      <button onClick={handleClick}>Click me</button>
    </>
  );
};

export default App;
