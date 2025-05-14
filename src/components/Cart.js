import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from '../utils/cartSlice'

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();
    const clearAll=()=>{
        dispatch(clearCart())
    }
  return (
    <div className='cart'>
        <h1>Cart</h1>
        <button onClick={clearAll}>Clear All</button>
        <ItemList items={cartItems}/>
    </div>
  )
}

export default Cart