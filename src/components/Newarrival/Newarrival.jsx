import { useEffect, useState } from "react";
import "./Newarrival.css"
import { Link } from "react-router-dom";
const Newarrival = () => {
    const [product,setproduct] = useState([])
   useEffect(()=>{
    fetch('https://fakestoreapi.com/products?limit=8')
    .then(res=>res.json())
    .then(json=>{setproduct(json),console.log(json);
    })
   },[])
  return (
    <>
         <div className='new-arrival'>
                 <h2>New Arrival</h2>
                 <div className="product">
                    {product.map(product=>(
                        <div key={product.id} className="item">
                          <Link to={`/product/${product.id}`}>  <img src={product.image} alt="" /> </Link> 
                             <p>{product.title}</p>
                             <p>${product.price}</p>
                        </div>
                    ))}
                 </div>
         </div>
    </>
  )
}

export default Newarrival