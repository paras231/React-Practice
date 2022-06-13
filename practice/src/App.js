import React from "react";
import { useTimeout } from "beautiful-react-hooks";

const App = () => {
  const [show, setShow] = React.useState(false);
  useTimeout(() => {
    setShow(true);
  }, 3000);
  return (
    <>
      <h1>
        Content will show in 3 sec... :{show && <p>This is a paragraph tag</p>}
      </h1>
    </>
  );
};

export default App;
