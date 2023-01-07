import axios from 'axios'
import { useEffect,useState } from 'react'
import Product from './product'

export const AllProductHome = () => {
  const [products, setProducts] = useState([]);

  const getdata= ()=>{
    try{
    axios.get("http://localhost:8080/api/products")
    .then(res => {
      setProducts(res.data)
    }
    )}catch(e){
      console.log(e)
    }
  }


 useEffect(()=>{
  getdata();
 },[])
  
  return (
    <div className="AllproductHome" >
      <h1>AllproductHome</h1>
      <br/>
      {products.map(prod =>(
        <Product nom={prod.name} sku={prod.sku} price={prod.price} 
                 description={prod.description}
                 createdAt={prod.createdAt}  updatedAt={prod.updatedAt}/>
      ))}
    </div>
  );
}
   
