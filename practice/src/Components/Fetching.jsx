import React from "react";
import useSWR from "swr";
import axios from "axios";

// in this file i have used swr npm package to fetch data from the server.
const Fetching = () => {
  const API = axios.create({
    baseURL: "https://farm-app4.herokuapp.com/api/v1/",
  })
  const fetcher = (url) => API.get(url).then((res) => res.data);
  const { data, error } = useSWR("/all/crops/admin", fetcher, {
    refreshInterval: 1000,
  });
  console.log(data, "data");
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <>
      {data.crops?.map((crop, index) => {
        return (
          <div key={index}>
            <h1>{crop.cropName}</h1>
            <h1>{crop.sowedDate}</h1>
          </div>
        );
      })}
    </>
  );
};

export default Fetching;
