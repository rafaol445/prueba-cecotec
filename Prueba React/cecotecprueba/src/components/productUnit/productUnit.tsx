import { IProduct } from "../../interfaces/IProduct";
import axios from "axios";
import './productUnit.css';

const urlProducts = "http://localhost:3000/Products";

export const ProductUnit = ({id, name, description, price} : IProduct ) => {

    const deleteProduct = () => {
        
        axios.delete(urlProducts + "/" + id).then(respuesta => {
                    alert("usuario borrado correctamente");                    
                }).catch(e => console.log(e));                
    }
    
    return(
        <div className={"cardProduct"}>
            <div className={"separator"}>
            <p>{id}</p>
            </div>            
            <div className={"separator"}>
            <p>{name}</p>
            </div>            
            <div className={"separator"}>
            <p>{description}</p>
            </div>
            <div className={"separator"}>
            <p>{price} {"€"}</p>
            </div>
            <div className={"separator"}>
            <button onClick={() => deleteProduct()}>Borrar</button>
            </div>            
        </div>
    );


}