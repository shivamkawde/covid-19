import { useState, useEffect } from "react";
import IndiaTable from "./IndiaTable";
function India() {
  let [indiaData, setIndiaData] = useState([]);
  useEffect(() => {
    fetch("./IndiaApi.json")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setIndiaData(json);
      });
  }, []);
  if (indiaData.length !== 0) console.log(indiaData);
  return (
    <>
      <IndiaTable indiaData={indiaData} />
    </>
  );
}
export default India;
