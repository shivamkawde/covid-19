
import Navbar from "./Navbar";
function IndiaTable(props) {
  return (
    <>
      <Navbar />
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style={{ color: "red" }}>
              State
            </th>
            <th scope="col" style={{ color: "red" }}>
              TotalConfirmed
            </th>
            <th scope="col" style={{ color: "red" }}>
              TotalDeaths
            </th>
            <th scope="col" style={{ color: "red" }}>
              TotalRecovered
            </th>
            <th scope="col" style={{ color: "red" }}>
              Active
            </th>
          </tr>
        </thead>
        {props.indiaData.map((e) => {
          return (
            <tbody>
              <tr>
                <th scope="row">{e.state}</th>
                <td>{e.TotalConfirmed}</td>
                <td>{e.TotalDeaths}</td>
                <td>{e.TotalRecovered}</td>
                <td>{e.Active}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
}
export default IndiaTable;
