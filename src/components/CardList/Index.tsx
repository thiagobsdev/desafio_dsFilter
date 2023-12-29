import { ProductDTO } from "../../models/ProductDTO/productDto";
import "./styles.css";

type Props = {
    product: ProductDTO;
}

export default function CardList( {product} : Props) {
  return (
    <div className="d-cardListDiv" >
      <p className="d-cardListName">{product.name}</p>
      <p className="d-cardListPrice">{`R$ ${product.price.toFixed(2)}`}</p>
    </div>
  );
}
