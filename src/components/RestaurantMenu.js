import React, { useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
  const { id } = useParams()
  const [showIndex, setShowIndex] = useState(null)

  const resInfo = useRestaurantMenu(id)

  if (resInfo == null) return <Shimmer />;
  // console.log(resInfo?.cards[2]?.card?.card?.info)
  const { name, avgRating, areaName, city, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  const{ deliveryTime} = resInfo?.cards[2]?.card?.card?.info?.sla
  // const { carousel, itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
      c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )

  // console.log(categories)

  // console.log(carousel)
  // console.log(itemCards)
  return (<div className='menu-color'>
    <div className='res-menu'>
      <div className='box-sha'>
        <h1>{name}</h1>
        <h4>✅{avgRating} {costForTwoMessage}</h4>
        <h4>Outlet: {areaName}</h4>
        <h4>{deliveryTime}-{deliveryTime+12} mins</h4>
      </div>
      <div>
        {categories.map((c, index) => (
          <RestaurantCategory

            key={c.card.card.title}
            data={c.card.card}
            showList={index === showIndex}
            setShowIndex={() => setShowIndex(index == showIndex ? null: index)}
          />
        ))}
      </div>
    </div>
  </div>
  )
}

export default RestaurantMenu