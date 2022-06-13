import React, { useContext,Suspense } from "react";
import { ThemeContext } from "./Context/ThemeContext";
import { lazy } from '@loadable/component'
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
  const Home = lazy(()=>import ("./Components/Home"));
  return (
    <>
      <div
        style={{ margin: 0, padding: 0 }}
        className={darkMode ? "dark" : "light"}
      >
        <p>HELLO WORLD</p>
       <Suspense fallback={<h1>Loading...</h1>}>
       <Home />
       </Suspense>
       
      </div>
      <button onClick={handleClick}>Click me</button>
    </>
  );
};

export default App;
