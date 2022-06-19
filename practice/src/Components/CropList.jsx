import React from "react";
import axios from "axios";
import debounce from "lodash/debounce";
const CropList = () => {
  const [data, setData] = React.useState([]);
  const [filteredCrops, setFilteredCrops] = React.useState([]);
  const fetchCrops = async () => {
    const res = await axios.get(
      "https://farm-app4.herokuapp.com/api/v1/all/crops/admin"
    );
    setData(res.data.crops);
  };
  React.useEffect(() => {
    fetchCrops();
  });
  // adding search feature using debouncing using vannila js
  // let filterTimeout;
  // const searchCrop = (query) => {
  //   clearTimeout(filterTimeout);
  //   if (!query) {
  //     setFilteredCrops(data);
  //     return;
  //   }
  //   filterTimeout = setTimeout(() => {
  //     console.log(query, "query here");
  //     setFilteredCrops(
  //       data.filter((crop) =>
  //         crop.cropName?.toLowerCase().includes(query.toLowerCase())
  //       )
  //     );
  //   }, 2000); // complete debounce concept
  // };
  // same debouncing can we implemented using lodash
  const searchCrop = debounce((query) => {
    if (!query) {
      setFilteredCrops(data);
      return;
    }
    console.log(query, "query here");
    setFilteredCrops(
      data.filter((crop) =>
        crop.cropName?.toLowerCase().includes(query.toLowerCase())
        
      )
    );
  }, 2000);
  return (
    <>
      <input
        type="search"
        placeholder="Search here"
        onChange={(e) => searchCrop(e.target.value)}
      />
      {filteredCrops.map((crop) => {
        return (
          <div key={crop._id}>
            <h3>{crop.cropName}</h3>
            <p>{crop.sowedDate}</p>
          </div>
        );
      })}
    </>
  );
};

export default CropList;
