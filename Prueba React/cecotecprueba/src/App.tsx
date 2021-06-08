import React, {useState} from 'react';
import './App.css';
import {NavLink, Route, Switch} from "react-router-dom";
import {InputText} from "primereact/inputtext";
import {Password} from "primereact/password";
import {Button} from "primereact/button";
import {Users} from './components/users';
import { Products } from './components/products';

const App = () => {

  const [loged, setloged] = useState(false);
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");


  return (
    
      <div className="App">
        <div className={"menu"}>
          {loged ? <>
          <div><NavLink to={'/users'} activeClassName={'default'}>Users</NavLink></div>
          <br/>
          <div><NavLink to={'/products'} activeClassName={'default'}>Products</NavLink></div>
          <br/></> : <p>login</p> }
          

        </div>
        <div className={"contenido"}>
          {!loged ? <div>
            <InputText name="userId" placeholder={"User Mail"} onChange={(e) => setuser(e.currentTarget.value)}/>
                            <br/>
            <Password style={{marginTop: 10}} name="password" placeholder={"Password"}
                                      onChange={(e) => setpassword(e.currentTarget.value)}/>
            <Button label="Login" icon="pi pi-check" onClick={() => {alert("loged"); setloged(true) }} autoFocus/>
        </div> : null}
        

          <Switch>            
            <Route path={'/users'}>
              <Users></Users>
            </Route>
            <Route path={'/products'}>
              <Products></Products>
            </Route>

          </Switch>
        </div>
          




      </div>
  );
}


export default App;
