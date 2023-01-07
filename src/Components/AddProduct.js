
import React, { useState } from 'react';
import '../Styles/AddproductStyle.css'

export const AddProduct = () => {
    const current = new Date();


    const url = "http://localhost:8080/api/save"
    const[data, setData] = useState({
        name:"",
        sku:"",
        price:"",
        description:"",
        createdAt:current,
        updatedAt:current
    })
    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }


    const mydata = {
        "sku": "1200000548",
        "name": "Holaaamazarati",
        "description": "llklklklklkllkkkkkkkkkkkkkk",
        "price": 20000000,
        "createdAt": "2018-09-28T18:38:39Z",
        "updatedAt": "2018-10-28T18:38:39Z"
    };

    async function submitform(e){


        e.preventDefault();
        const res = await fetch(url,{
            method:'post',
            headers:{
                'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(data)
        })
        console.log(mydata);
        console.log(res);
    }

    return (
        <div className="form">
            <div>
                <h1>Add new Product :</h1>
            </div>
        <div className="form-body">
            <div className="formInput">
                <label className="label" >Product Name </label>
                <input className="input"  value={data.name} onChange={(e)=>handle(e)} type="text" id="name" placeholder="Product Name"/>
            </div>
            <div className="formInput">
                <label className="sku" >Sku id </label>
                <input  type="text"  value={data.sku}  onChange={(e)=>handle(e)} name="" id="sku"  className="input"placeholder="Sku"/>
            </div>
            <div className="formInput">
                <label className="price" >Price </label>
                <input  type="number" value={data.price} onChange={(e)=>handle(e)}  id="price" className="input" placeholder="Price"  required/>
            </div>
            <div className="formInput">
                <label className="label" >description </label>
                <input className="input"  value={data.description} onChange={(e)=>handle(e)}  type="text"  id="description" placeholder="description"  required/>
            </div>
        </div>
        <div className="submitbutton">
            <button type="submit"  onClick={submitform} className="btn">Submit</button>
        </div>
    </div>      
    );
  }
   