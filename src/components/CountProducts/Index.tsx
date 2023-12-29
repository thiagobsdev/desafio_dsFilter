import { useContext } from "react";
import "./styles.css"
import { ContextProductsCount } from "../../Context/products-context";

export default function CountProducts () {

    const { contextProductsCount } = useContext(ContextProductsCount);

    return ( 
        <p className="d-count-products" >{contextProductsCount} produto(s)</p>
    );
}