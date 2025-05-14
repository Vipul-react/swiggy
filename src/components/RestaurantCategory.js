import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({data, showList, setShowIndex}) => {
    const handleClick=()=>{
        setShowIndex();
    }
  return (
    <div className='res-category'>
        <h2 className='category' onClick={handleClick} >{data.title}</h2>
        {showList && <ItemList items = {data.itemCards} />}
    </div>
  )
}
export default RestaurantCategory