import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product/Product"
const Products = () => {
 const [product,setProduct]=useState([]);
 useEffect(()=>{
   axios.get("http://localhost:8080/products").then((res)=>{
     setProduct(res.data)
   })
 },[])
 
  return <div>
   <h2>Products</h2>
   {product.map((item)=>{
     return <div>
       <h3>{item.name}</h3>
       <p>{item.description}</p>
       <button onClick={()=>{}}>Add to Cart</button>
       </div>
   })}
    <Product/>
  </div>;
};

export default Products;
