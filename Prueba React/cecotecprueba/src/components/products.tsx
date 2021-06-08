import React, {useState, useEffect} from 'react';
import axios from "axios";
import { IProduct } from '../interfaces/IProduct';


const urlProducts = "http://localhost:3000/Products";


export const Products = () => {    

    // const [response, loading, error] = useFetch(urlProducts);
    const [products, setproducts] = useState<IProduct[]>([]);
    useEffect(() => {

        getProducts(urlProducts);
        
        
    }, []);

    const getProducts = async (url : string) => {

        await axios.get(url).then(async (respuesta) => {
            setproducts(respuesta.data);            
        }).catch(e => {
            console.log("Error de conexion con la API");
        });
        


    }


    return(
        <>
        {products.map(e => <p>{e.name}</p> ) }
        </>
    );

}


