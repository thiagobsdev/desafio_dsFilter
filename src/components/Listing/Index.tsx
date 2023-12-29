import CardList from "../CardList/Index";
import "./styles.css";

import { ProductDTO } from "../../models/ProductDTO/productDto";
import { useEffect, useState } from "react";

type Props = {
  productsList: ProductDTO[]
}

export default function Listing( {productsList}: Props) {
  const [products, setProducts] = useState<ProductDTO[]>(productsList)

  useEffect(() => {
    setProducts(productsList);
  }, [productsList]);

  return (
    <div className="d-container d-bg-white ">
      {products.length > 0 &&

        products.map((item) => {
            return( <CardList key={item.id} product={item}/> )
        })}
    </div>
  );
}
