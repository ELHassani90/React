
import {useEffect, useState } from 'react'
import axios from 'axios'

import Product from './product'

export const Home = () => {
  const [warn, setWarn] = useState(false);
  const [skuCode, setSkucode] = useState("");
  const [products, setProducts] = useState("");
  const [query, setQuery] = useState("");


  const getdata =e =>{
    axios.get("http://localhost:8080/api/product?sku="+skuCode)
    .then(res => {
      setProducts(res.data);
    }).catch(error => {
      setWarn(true);
      console.log(error);
      return error;});

    setSkucode("")
  }
  
  

  function WarningBanner(props) {
    if (!props.warn) {
      return null;
    }
  
    return (
      <div className="warning">
        <h2>Warning !!! </h2>
        <h3>This product doen't exist </h3>
      </div>
    );
  }

  const updatesherch = e=>{
    setSkucode(e.target.value);
  }

  useEffect(()=>{
    console.log(products)
// eslint-disable-next-line
   },[query])
  
  const updatequery= e=>{
    setQuery(skuCode);
    getdata();
  }
  


  return (
    <div className="Home" >
      <h1>Home</h1>
      <br/>
      <input type="text" value={skuCode} onChange={updatesherch}/>
      <WarningBanner warn={warn} />
        <Product nom={products.name} sku={products.sku} price={products.price} 
                 description={products.description}
                 createdAt={products.createdAt}  updatedAt={products.updatedAt}/>


      <button type="Submit"  onClick={updatequery} className="btn">Search</button>
    </div>
  );
}
   
