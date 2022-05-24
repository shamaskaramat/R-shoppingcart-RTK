import React, { useState , useEffect } from 'react'
import { add } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch =  useDispatch()
  useEffect(()=>{
    const fetchProducts = async ()=>{
      const responce= await fetch("https://fakestoreapi.com/products")
      const data  = await responce.json();
      console.log(data)
      setProducts(data)
    }
    fetchProducts();
  },[])
  const handleAdd = (product)=>{
    dispatch(add(product))
  }
  return (
    <div className='productsWrapper'>
      {products.map((product)=>(
        <div className='card'>
          <img src={product.image} alt={product.title}/>
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className='btn' onClick={()=>handleAdd(product)}>ADD TO CART</button>
        </div>
      ))}
    </div>
  )
}

export default Products