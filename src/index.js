import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App';
import Legend from './Legend';
import DataChart from './DataChart';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SafeCountry from './SafeCountry';
import India from "./India";
import IndiaVaccination from './IndiaVaccination'

ReactDOM.render(
 <Router>

   <Switch>

        <Route path="/Legend">
           <Legend></Legend>
        </Route>

        <Route path="/DataChart">
             <DataChart/>
          </Route>
          <Route path="/SafeCountry">
             <SafeCountry/>
            </Route>
            <Route path="/India">
              <India/>
               
              </Route>
              <Route path="/IndiaVaccination">
                <IndiaVaccination/>
                </Route>

        <Route path="/">
          <App/> 
        </Route>
       

   </Switch>
 </Router>,
  document.getElementById('root')
);


