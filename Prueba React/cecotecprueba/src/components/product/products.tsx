import React, { useState, useEffect } from 'react';
import axios from "axios";
import { IProduct } from '../../interfaces/IProduct';
import { ProductUnit } from '../productUnit/productUnit';
import "./product.css";
const urlProducts = "http://localhost:3000/Products";


export const Products = () => {

    const [products, setproducts] = useState<IProduct[]>([]);
    const [id, setid] = useState("");
    const [name, setname] = useState("");
    const [description, setdescription] = useState("");
    const [price, setprice] = useState("");    

    const updateProduct = () => {
        
        const product : IProduct = {id, name, description, price}
        JSON.stringify(product)
        axios.put( urlProducts + '/' + id , product ).then((response) => {
            alert("Actualizado")
        }, (error) => {
            console.log(error);
        });
        getProducts(urlProducts);
        cleanInputs();
    }

    const postProduct = () => {
        
        const product : IProduct = {id, name, description, price}
        JSON.stringify(product)
        axios.post( urlProducts , product ).then((response) => {
            alert("Alta Correcta")
        }, (error) => {
            console.log(error);
        });
        getProducts(urlProducts);
        cleanInputs();
    }    

    const getProducts = async (url: string) => {

        await axios.get(url).then(async (respuesta) => {
            setproducts(respuesta.data);
        }).catch(e => {
            console.log("Error de conexion con la API");
        });
    }

    const cleanInputs = () => {
        setname("");
        setid("");
        setdescription("");
        setprice("");
    }

    useEffect(() => {
        getProducts(urlProducts);

    }, []);

    return (        
            <div className={"generalContainer"}>
                <div className={"header"}>
                    <div className={"separator"}>
                        <p>Id</p>
                    </div>
                    <div className={"separator"}>
                        <p>Nombre</p>
                    </div>
                    <div className={"separator"}>
                        <p>Description</p>
                    </div>
                    <div className={"separator"}>
                        <p>Price</p>
                    </div>
                    <div className={"separator"}>
                        <button className={"buttonRefresh"} onClick={() => getProducts(urlProducts)}>Refresh</button>
                    </div>
                </div>
                <div className={"header"}>
                    <div className={"separator"}>
                        <input placeholder={"Id"} value={id} onChange={(e) => setid(e.currentTarget.value)}></input>
                    </div>
                    <div className={"separator"}>
                        <input placeholder={"Nombre"} value={name} onChange={(e) => setname(e.currentTarget.value)}></input>
                    </div>
                    <div className={"separator"}>
                        <input placeholder={"Description"} value={description} onChange={(e) => setdescription(e.currentTarget.value)}></input>
                    </div>
                    <div className={"separator"}>
                        <input placeholder={"Price"} value={price} onChange={(e) => setprice(e.currentTarget.value)}></input>
                    </div>
                    <div className={"separator"}>
                        <button className={"buttonCreate"} onClick={() => postProduct()}>Crear</button>
                        <button className={"buttonCreate"} onClick={() => updateProduct()}>Actualizar</button>
                    </div>
                </div>
                <div className={"listContainer"}>
                    {products.map((item, index) => <ProductUnit  {...item} key={index}></ProductUnit>)}
                </div>
            </div>        
    );
}


