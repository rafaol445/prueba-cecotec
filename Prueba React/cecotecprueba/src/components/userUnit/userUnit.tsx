import axios from "axios";
import './userUnit.css';
import { IUser } from "../../interfaces/IUser";

const urlProducts = "http://localhost:3000/Users";

export const UserUnit = ({id, name} : IUser ) => {

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
            <button className={"buttonDelete"} onClick={() => deleteProduct()}>Borrar</button>
            </div>            
        </div>
    );


}