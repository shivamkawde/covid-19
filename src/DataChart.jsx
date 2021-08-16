import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import Navbar from "./Navbar";
function DataChart() {
  let [countries, setCountries] = useState([]);
  let [coutryName, setCountryName] = useState("");

  useEffect(() => {
    fetch("./data.json")
      .then(function (res) {
        return res.json();
      })
      .then((json) => {
        setCountries(json);
      });
  }, []);
  function toCamelCase(str) {
    let s = str.toLowerCase();
    let left = s[0].toUpperCase();

    let right = s.substring(1);
    return left + right;
  }

  console.log(countries);
  return (
    <>
      <Navbar />
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
                  let data = document.querySelector("#data").value;
                  if (data !== "") data = toCamelCase(data);
                  setCountryName(data);
                }}
              >
                Search
              </button>
            }
          </div>
        </div>
      </div>

      {countries.length !== 0 ? (
        coutryName === "" ? (
          <div>
            {" "}
            <h1 style={{ textAlign: "center" }}>Global Data</h1>
            <Bar
              data={{
                labels: [
                  "NewConfirmed",
                  "TotalConfirmed",
                  "TotalDeaths",
                  "TotalRecovered",
                ],

                datasets: [
                  {
                    label: "Covid 19 Global",

                    data: [
                      countries.Global.NewConfirmed,
                      countries.Global.TotalConfirmed,
                      countries.Global.TotalDeaths,
                      countries.Global.TotalRecovered,
                    ],

                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "red",
                      "rgba(255, 206, 86, 0.2)",
                      "green",
                      "green",
                      "green",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 206, 86, 1)",
                      "rgba(75, 192, 192, 1)",
                      "rgba(153, 102, 255, 1)",
                      "rgba(255, 159, 64, 1)",
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
              height={300}
              width={600}
              options={{ maintainAspectRatio: false }}
            ></Bar>
          </div>
        ) : (
          countries.Countries.map((e) => {
            if (e.Country === coutryName) {
              return (
                <div>
                  <h1 style={{ textAlign: "center" }}>{e.Country}</h1>
                  <Bar
                    data={{
                      labels: [
                        "NewConfirmed",
                        "TotalConfirmed",
                        "TotalDeaths",
                        "TotalRecovered",
                      ],

                      datasets: [
                        {
                          label: "Covid 19",

                          data: [
                            e.NewConfirmed,
                            e.TotalConfirmed,
                            e.TotalDeaths,
                            e.TotalRecovered,
                          ],

                          backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "red",
                            "rgba(255, 206, 86, 0.2)",
                            "green",
                            "green",
                            "green",
                          ],
                          borderColor: [
                            "rgba(255, 99, 132, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
                            "rgba(255, 159, 64, 1)",
                          ],
                          borderWidth: 1,
                        },
                      ],
                    }}
                    height={300}
                    width={600}
                    options={{ maintainAspectRatio: false }}
                  ></Bar>
                </div>
              );
            }
          })
        )
      ) : (
        //bhar

        ""
      )}
    </>
  );
}

export default DataChart;
