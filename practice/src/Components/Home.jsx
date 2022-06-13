import React, { Suspense } from "react";
import { data } from "../Data";

const Home = () => {
  const Testing = React.lazy(
    () =>
      new Promise((resolve) =>
        setTimeout(() => resolve(import("../Components/Testing")), 2000)
      )
  );
  return (
    <>
      {data.map((i) => {
        return (
          <>
            <div key={i.id}>
              <h1>{i.name}</h1>
              <h1>{i.age}</h1>
              <h1>{i.email}</h1>
            </div>
          </>
        );
      })}
      <Suspense fallback={<div>Loading...</div>}>
        <Testing />
      </Suspense>
    </>
  );
};

export default Home;
