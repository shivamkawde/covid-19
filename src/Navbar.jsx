import { NavLink } from "react-router-dom";
import "./Navbar.css"

function Navbar(props) {
  console.log(props.countries);
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <NavLink exact activeClassName="activeLink" to="/App" 
          
          style={{ textDecoration: "none", fontSize: "large", fontWeight: "bold", padding:"10px",marginRight:"3px"}}
          >
            Home
          </NavLink>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink exact activeClassName="activeLink" to="/DataChart"
                
                style={{ textDecoration: "none", fontSize: "large", fontWeight: "bold", padding:"10px",marginRight:"3px"}}
                >
                  Data Chart
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink exact activeClassName="activeLink" to="/Legend"
                  style={{ textDecoration: "none", fontSize: "large", fontWeight: "bold", padding:"10px",marginRight:"3px"}}
                >
                  Red alert Countries
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink exact activeClassName="activeLink" to="/SafeCountry"
                
                style={{ textDecoration: "none", fontSize: "large", fontWeight: "bold", padding:"10px",marginRight:"3px"}}
                >
                  Safe Countries
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink exact activeClassName="activeLink" to="/India"
                
                style={{ textDecoration: "none", fontSize: "large", fontWeight: "bold", padding:"10px",marginRight:"3px"}}
                >
                  India Report
                </NavLink>
              </li>

              <li>
                <NavLink
                  exact
                  activeClassName="activeLink"
                  to="/indiaVaccination"
                  style={{ textDecoration: "none", fontSize: "large", fontWeight: "bold", padding:"10px",marginRight:"3px"}}
                >
                  india Vaccination
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
