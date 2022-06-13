import React, { Suspense } from "react";

const Testing = () => {
  const Testing2 = React.lazy(
    () =>
      new Promise((resolve) =>
        setTimeout(() => resolve(import("../Components/Testing2")), 2000)
      )
  );
  return (
    <>
      <h1>Testing Component</h1>
      <Suspense fallback={<p>Loading2...</p>}>
        <Testing2 />
      </Suspense>
    </>
  );
};

export default Testing;
