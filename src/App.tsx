import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route,Link,NavLink } from 'react-router-dom';
// import {Route,Router,Link} from 'react-router';
import Home from './component/Home';
import Dashboard from './component/Dashboard';
import Detail from './component/Detail';


function Nav(){

  return(
    <ul>
      <li><Link to = "/home/'zhangs'?age=23">HOME</Link></li>
      <li><Link to = "/dashboard/123">DASHBOARD</Link></li>
      <li><Link to = {{
        pathname : "/detail",
        search : "?name='zhangs'",
        state : {fromDashboard:true},
        hash : "#hase"
      }}>DETAIL</Link></li>
    </ul>
  )
}





export default function App() {
  return (
    <Router basename = "/app" keyLength = {12} >
      <Nav />

      <Switch>
        <Route path = "/detail"><Detail/> </Route>
        <Route path = "/dashboard/:id">
          <Dashboard />
        </Route>
        <Route path = "/home/:auth" component={Home} />
      </Switch>

    </Router>

  );
}