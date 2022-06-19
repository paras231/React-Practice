import React, { useState, useEffect } from "react";
import axios from "axios";

const Testing3 = () => {
  const [data, setData] = useState([]);

  const fetchCrops = async () => {
    const response = await axios.get(
      "https://farm-app4.herokuapp.com/api/v1/all/crops/admin"
    );
    console.log(response.data);
    setData(response.data?.crops);
  };
  useEffect(() => {
    fetchCrops();
  });

  return (
    <>
      {data?.map((item, index) => {
        return (
          <>
            <div key={index}>
              <p>{item.cropName}</p>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Testing3;
