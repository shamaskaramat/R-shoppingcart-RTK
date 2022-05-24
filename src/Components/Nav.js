import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Nav = () => {
  const items = useSelector((state)=>state.cart)
  return (
    <>
        <div style={{display:'flex', justifyContent:"space-between", alignItems:"center", marginBottom:"30px"}}>
            <span className='logo'>REDUX STORE</span>
            <div>
                <Link className="navLink " to="/" >Home</Link>
                <Link className="navLink " to="/cart" >Cart</Link>
                <span className='cartCount'>cart items : {items.length}</span>
            </div>
        </div>
    </>
  )
}

export default Nav