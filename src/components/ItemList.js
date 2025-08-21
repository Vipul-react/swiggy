import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice';

const ItemList = ({ items }) => {
  console.log(items)
  const dispatch = useDispatch();
  const handleAddItems= (data)=>{
  
    dispatch(addItem(data))
  }
  return (
    <div className='item-list'>{items.map((item) => (
      <div className='item' key={item.card.info.name}>
        <div className='item-info'>
          <h4 >{item.card.info.name}</h4>
          <h5>₹{item.card.info.price / 100}</h5>
          <h5>✅{item.card.info.ratings.aggregatedRating.rating || "NaN"} ({item.card.info.ratings.aggregatedRating.ratingCountV2 || "Nan"})</h5>
          <h6>{item.card.info.description}</h6>
        </div>
        <div>
          <button onClick={()=>handleAddItems(item)}>ADD</button>
          <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + item.card.info.imageId} alt="Item_Image" />
        </div>
      </div>
    ))}
    </div>
  )
}

export default ItemList