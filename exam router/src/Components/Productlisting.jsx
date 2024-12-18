
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';

const Productlisting = () => {

  const [data, setdata] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);




  const fetchdata = () => {
    {
      fetch(`http://localhost:3000/products`)
      .then((res) => res.json())
      .then((data) => setdata(data))
      .catch((err) => console.log(err));
  };
}

  useEffect(() => {
    fetchdata();
  }, [data]);
  const handdelete =(id)=>
  {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "Delete",
    })
      .then((res) => res.json())
      .then((data) => alert("delete successs.."));
  }
  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 5); 
  };
  return (
    <div>
      <h1>product</h1>
      <div className="product">
      {data.slice(0, visibleCount).map((el)=> (
          
          <div key={el.id}>
          <Link to={`/Productdetails/${el.id}`}>
          
              <div>{el.id}</div>

              <img src={el.image} alt="" style={{ height: 200, width: 200 }} />
              <h2>{el.title}</h2>
              <h4>{el.description}</h4>
              <h5>{el.category}</h5>
            
            <h2>{el.price}</h2>
            </Link>
          <Link to={`/Edit/${el.id}`}>

            <button>edit</button></Link>
            <button onClick={()=>handdelete(el.id)}>delete</button><br />
            
            <button>Add to cart</button>
           
            

           
          </div>
        ))}


      
      </div>
      <a onClick={handleViewMore}>
            View More...
          </a>
     
      </div>
  );
}

export default Productlisting
