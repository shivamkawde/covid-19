import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

function SafeCountry() {
  let [Topcountries, setTopCountries] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then(function (res) {
        return res.json();
      })
      .then((json) => {
        setTopCountries(json);
        //this.setState({loading: false})
        //this.props.sendData(json.length);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="row">
        {Topcountries.length !== 0
          ? Topcountries.Countries.map((e) => {
              return e.TotalConfirmed === 0 ? (
                <div className="col-4">
                  <div class="card">
                    <div class="card-body">
                      {
                        <div>
                          <h3> {e.Country}</h3>
                          <h5 style={{ color: "red" }}>
                            TotalConfirmed :{e.TotalConfirmed}
                          </h5>
                          <h5 style={{ color: "green" }}>
                            TotalRecovered :{e.TotalRecovered}
                          </h5>
                          <h5 style={{ color: "black" }}>
                            TotalDeaths :{e.TotalDeaths}
                          </h5>
                        </div>
                      }
                    </div>
                  </div>
                </div>
              ) : (
                ""
              );
            })
          : "df"}
      </div>
    </>
  );
}
export default SafeCountry;
