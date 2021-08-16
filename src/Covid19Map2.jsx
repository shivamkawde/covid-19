import React from "react";
import CovidMap from "./CovidMap";
import { useState, useEffect } from "react";
import Loding from "./Loding";
//import {features} from "./countries.json"
import Legend from "./Legend";
import Navbar from "./Navbar";
function Covid19Map2(props) {
  let [countries, setCountries] = useState([]);
  let [sfeature, setFeature] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then(function (res) {
        return res.json();
      })
      .then((json) => {
        setCountries(json);
        
      });
  }, []);

  return (
    <div>
      {countries.length === 0 ? (
        <Loding />
      ) : (
        <div>
          <Navbar countries2={countries} />
          <CovidMap
            setCountries={setCountries}
            countries={sfeature.features}
            setFeature={setFeature}
            countries2={countries}
          />{" "}
        </div>
      )}
    </div>
  );
}
export default Covid19Map2;
