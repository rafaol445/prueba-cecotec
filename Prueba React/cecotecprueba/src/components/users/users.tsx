import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./users.css";
import { UserUnit } from '../userUnit/userUnit';
import { IUser } from '../../interfaces/IUser';


const urlUsers = "http://localhost:3000/Users";


export const Users = () => {

    const [users, setusers] = useState<IUser[]>([]);
    const [id, setid] = useState("");
    const [name, setname] = useState("");
    const [password, setpassword] = useState("");


    

    const updateUser = () => {

        const user: IUser = { id, name, password }
        JSON.stringify(user)
        axios.put(urlUsers + '/' + id, user).then((response) => {
            alert("Actualizado!");
        }, (error) => {
            console.log(error);
        });
        getUsers(urlUsers);
        cleanInputs();

    }
    const postUser = () => {

        const user: IUser = { id, name, password }
        JSON.stringify(user)
        axios.post(urlUsers, user).then((response) => {
            alert("Alta Ok");
        }, (error) => {
            console.log(error);
        });
        getUsers(urlUsers);
        cleanInputs();

    }

    const getUsers = async (url: string) => {

        await axios.get(url).then(async (respuesta) => {
            setusers(respuesta.data);
        }).catch(e => {
            console.log("Error de conexion con la API");
        });
    }

    const cleanInputs = () => {
        setname("");
        setid("");
        setpassword("");
    }

    useEffect(() => {
        getUsers(urlUsers);

    }, []);

    return (
        <>
            <div className={"generalContainer"}>
                <div className={"header"}>
                    <div className={"separator"}>
                        <p>Email</p>
                    </div>
                    <div className={"separator"}>
                        <p>Nombre</p>
                    </div>
                    <div className={"separator"}>
                        <button className={"buttonRefresh"} onClick={() => getUsers(urlUsers)}>Refresh</button>
                    </div>
                </div>
                <div className={"header"}>
                    <div className={"separator"}>
                        <input placeholder={"Email"} value={id} onChange={(e) => setid(e.currentTarget.value)}></input>
                    </div>
                    <div className={"separator"}>
                        <input placeholder={"Nombre"} value={name} onChange={(e) => setname(e.currentTarget.value)}></input>
                    </div>
                    <div className={"separator"}>
                        <input type={"password"} value={password} placeholder={"Password"} onChange={(e) => setpassword(e.currentTarget.value)}></input>
                    </div>
                    <div className={"separator"}>
                        <button className={"buttonCreate"} onClick={() => postUser()}>Crear</button>
                        <button className={"buttonCreate"} onClick={() => updateUser()}>Actualizar</button>
                    </div>

                </div>
                <div className={"listContainer"}>
                    {users.map((item, index) => <UserUnit key={item.id} {...item}></UserUnit>)}
                </div>
            </div>
        </>
    );

}


