import React, { useEffect, useState } from "react";
import data from "../data";
import Product from '../components/Product'


export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    const fetchData = async () =>{
      const {data} = await axios.get('/api/products');
    }
  },[]);

  return (
    <div>
      <div className="row center">
        {data.products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
}
