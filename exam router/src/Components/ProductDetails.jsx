import React from 'react'
import { useParams } from 'react-router';
import { useState,useEffect } from 'react';

const Productdetails = () => {
  const param=useParams()
  console.log(param)
  const [para,setpara]=useState('')

  function paramdata()
  {
    fetch(`http://localhost:3000/products/${param.id}`)
    .then((res)=>res.json())
    .then((data)=>setpara(data))
  }

useEffect(()=>{
paramdata()
},[])
  
  return (
    <div>
      <img src={para.image} alt=""  height={100} width={100}/>
      <h2>{para.price}</h2>
      <h3>{para.title}</h3>
      <p>{para.description}</p>


    </div>
  )
}

export default Productdetails
