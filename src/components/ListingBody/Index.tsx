import Filter from "../CardFilter/Index";
import Listing from "../Listing/Index";
import "./styles.css";

import { ProductDTO } from "../../models/ProductDTO/productDto";

import * as productService from "../../services/product-service";
import { useContext, useEffect, useState } from "react";
import { ContextProductsCount } from "../../Context/products-context";

export default function ListingBody() {

    const { setContextProductsCount } = useContext(ContextProductsCount);

  const [products, setProducts] = useState<ProductDTO[]>([
    {
      id: 0,
      name: "",
      price: 0,
    },
  ]);

  useEffect(() => {
    const productsNumber = products.length
    setContextProductsCount(productsNumber)
    }, [products]);


  function newsProductsValues(min: number, max: number) {
    const newsProducts = productService.findByPrice(
      min || 0,
      max || Number.MAX_VALUE
    );
    setProducts(newsProducts);
  }

  return (
    <body>
      <Filter onNewsValues={newsProductsValues} />
      <Listing productsList={products} />
    </body>
  );
}
