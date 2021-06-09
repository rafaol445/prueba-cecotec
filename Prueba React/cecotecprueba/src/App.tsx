import React, { useState } from 'react';
import axios from "axios";
import './App.css';
import { NavLink, Route, Switch } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Users } from './components/users/users';
import { Products } from './components/product/products';
const urlUsers = "http://localhost:3000/Users";

const App = () => {

  const [loged, setloged] = useState(false);
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");

  const checkLogin = async () => {

    if (user.length === 0 || password.length === 0) {
      alert("Introduce datos validos");

    } else {
      let emailBack;
      let passwordBack;

      await axios.get(urlUsers + "?email=" + user).then((respuesta) => {
        emailBack = respuesta.data[0].email;
        passwordBack = respuesta.data[0].password;

      }).catch(e => {
        console.log("Error de conexion");
      });

      if (user === emailBack && password === passwordBack) {
        setloged(true);
      } else {
        alert("email o password incorrectos");
      }
    }
  }


  return (

    <div className="App">
      <div className={"menu"}>
        {loged ? <>
          <div><NavLink to={'/users'} activeClassName={'default'}>Users</NavLink></div>
          <br />
          <div><NavLink to={'/products'} activeClassName={'default'}>Products</NavLink></div>
          <br /></> : null}
      </div>
      <div className={"contenido"}>
        {!loged ? <div>
          <InputText name="userId" placeholder={"User Mail"} onChange={(e) => setuser(e.currentTarget.value)} />
          <br />
          <Password style={{ marginTop: 10 }} name="password"
            placeholder={"Password"}
            onChange={(e) => setpassword(e.currentTarget.value)} />
          <Button className={"buttonLogin"} label="Login"
            icon="pi pi-check"
            onClick={() => checkLogin()} autoFocus />
        </div> : null}


        <Switch>
          <Route path={'/users'}>
            {loged ? <Users></Users> : null}
          </Route>
          <Route path={'/products'}>
            {loged ? <Products></Products> : null}

          </Route>
        </Switch>
      </div>
    </div>
  );
}


export default App;
