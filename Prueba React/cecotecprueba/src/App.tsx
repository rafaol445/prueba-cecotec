import React from 'react';
import './App.css';
import {NavLink, Route, Switch} from "react-router-dom";

function App() {
  return (
      <div className="App">
        <div className={"menu"}>
          <div><NavLink to={'/login'} activeClassName={'default'}>Login</NavLink></div>
          <br/>
          <div><NavLink to={'/users'} activeClassName={'default'}>Users</NavLink></div>
          <br/>
          <div><NavLink to={'/products'} activeClassName={'default'}>Products</NavLink></div>
          <br/>

        </div>
        <div className={"contenido"}>
          <Switch>
            <Route path={'/login'}>
              <p>login</p>
            </Route>
            <Route path={'/users'}>
              <p>users</p>
            </Route>
            <Route path={'/products'}>
              <p>products</p>
            </Route>

          </Switch>
        </div>




      </div>
  );
}

export default App;
