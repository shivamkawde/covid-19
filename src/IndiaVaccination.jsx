import { json } from "d3";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Navbar from "./Navbar";
function IndiaVaccination() {
  let [indiaVaccination, setVaccination] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=&district_id=&date=2021-06-1"
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setVaccination(json.topBlock.vaccination);
      });
  }, []);
  if (indiaVaccination.length !== 0) console.log(indiaVaccination.total);
  return (
    <>
      <Navbar />

      {indiaVaccination.length !== 0 ? (
        <Bar
          data={{
            labels: [
              "total",
              "male",
              "female",
              " covishield",
              "covaxin",
              "dose_1",
              "dose_2",
            ],

            datasets: [
              {
                label: "Covid 19 India Vaccination",
                data: [
                  indiaVaccination.total,
                  indiaVaccination.male,
                  indiaVaccination.female,
                  indiaVaccination.covishield,
                  indiaVaccination.covaxin,
                  indiaVaccination.tot_dose_1,
                  indiaVaccination.tot_dose_2,
                ],

                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "red",
                  "rgba(255, 206, 86, 0.2)",
                  "green",
                  "yellow",
                  "#fc8803",
                  "blue",
                  "pink",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          }}
          height={100}
          width={600}
          options={{ maintainAspectRatio: false }}
        ></Bar>
      ) : (
        ""
      )}
      <h3>Total Vaccination:{indiaVaccination.total}</h3>
      <h3>Covishield Dose:{indiaVaccination.covishield}</h3>
      <h3>Covaxin Dose:{indiaVaccination.covaxin}</h3>
    </>
  );
}
export default IndiaVaccination;
