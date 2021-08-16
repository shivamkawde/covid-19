import React from "react";
import { Map, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./covidMap.css";
import Loding from "./Loding";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";
//import {features} from "./countries.json"

function CovidMap(props) {
  let [searchCountry, setSearchCountry] = useState("");
  let [inputCheckLayer, setInputSearchLayer] = useState([]);
  let [zoomMap, setZoom] = useState(2);
  useEffect(() => {
    fetch("./countries.json")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setInputSearchLayer(json);
      });
  }, []);

  console.log(props.countries);

  const mapStyle = {
    fillColor: "white",
    weight: 1,
    color: "#3b3434",
    fillOpacity: 1,
  };
  let finalcase;
  let death;
  let recover;
  let findData = (val) => {
    props.countries2.Countries.map((e) => {
      if (val === e.Country) {
        finalcase = e.TotalConfirmed;
        death = e.TotalDeaths;
        recover = e.TotalRecovered;
      }
    });
  };

  function toCamelCase(str) {
    // If it is the first word make sure to lowercase all the chars.

    let s = str.toLowerCase();
    let left = s[0].toUpperCase();

    let right = s.substring(1);
    return left + right;
  }

  let data;
  let allcountries = (country, layer) => {
    //console.log(layer)
    //console.log(layer)
    const name = country.properties.ADMIN;

    if (searchCountry === name) {
      findData(name);
      layer.options.fillColor = "red";
      layer.bindPopup(` <h1> ${name}</h1> 
            <h4 class="finalcase">Confirmed Cases : ${finalcase}</h4><h4 class="recover">TotalRecovered : ${recover}</h4> <h4>TotalDeaths : ${death}</h4> `);
      return;
    }
    layer.options.fillColor = "white";

    console.log(name);
    //    console.log(layer)
    //setInputSearchLayer(layer)

    findData(name);
    layer.bindPopup(` <h1> ${name}</h1> 
          <h4 class="finalcase">Confirmed Cases : ${finalcase}</h4><h4 class="recover">TotalRecovered : ${recover}</h4> <h4>TotalDeaths : ${death}</h4> `);
  };

  return inputCheckLayer.length !== 0 ? (
    <>
      <div className="row">
        <div className="col-8">
          <div class="input-group ">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Country Name"
              aria-label="Username"
              aria-describedby="basic-addon1"
              id="data"
            />
            {
              <button
                type="button"
                onClick={(e) => {
                  data = document.querySelector("#data").value;
                  if (data !== "") {
                    data = toCamelCase(data);
                    setSearchCountry(data);
                    setInputSearchLayer([]);
                  }

                  fetch("./countries.json")
                    .then((res) => {
                      return res.json();
                    })
                    .then((json) => {
                      setInputSearchLayer(json);
                    });
                }}
              >
                Search
              </button>
            }
          </div>
        </div>
      </div>
      <Map
        style={{ height: "90vh" }}
        zoom={2}
        center={[30, 50]}
        scrollWheelZoom={true}
      >
        <GeoJSON
          style={mapStyle}
          data={inputCheckLayer.features}
          onEachFeature={allcountries}
        ></GeoJSON>
      </Map>
      *
    </>
  ) : (
    <Loding />
  );
}
export default CovidMap;
