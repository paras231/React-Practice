import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";
import Home from "./Components/Home";
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
  return (
    <>
      <div
        style={{ margin: 0, padding: 0 }}
        className={darkMode ? "dark" : "light"}
      >
        <p>HELLO WORLD</p>

        <Home />
      </div>
      <button onClick={handleClick}>Click me</button>
    </>
  );
};

export default App;
