import { useState,useEffect, } from "react"
import { Link } from "react-router-dom"
import "./product.css"
const Product = () => {
    const [product,setproduct] = useState([])
    useEffect(()=>{
     fetch('https://fakestoreapi.com/products')
     .then(res=>res.json())
     .then(json=>{setproduct(json),console.log(json);
     })
    },[])
  return (
    <>
    <div className="product">
    <div className="product-item">
    {product.map(product=>(
        <div key={product.id} className="item">
          <Link to={`/product/${product.id}`}> <img src={product.image} alt="" /> </Link>   
             <p>{product.title}</p>
             <p>${product.price}</p>
        </div>
    ))}
 </div>
 </div>
 </>
  )
}

export default Product