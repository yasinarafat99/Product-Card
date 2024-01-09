import React, { useEffect, useState } from "react"
const url = "https://dummyjson.com/products";
import './productList.css'
import ProductCard from "../product-card/ProductCard";

function ProductList() {
  const [productList, setProductList] = useState([]);
  const { products } = productList;


  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProductList(data));
  }, []);
  return (
    <>
    <div className="product_card">
       {products &&
        products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))} 
    </div>
      
    </>
  );
}

export default ProductList;
