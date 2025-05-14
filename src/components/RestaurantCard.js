import React from 'react'
import { CDN_URL } from "../utils/constant"
export const RestaurantCard = ({ resObj }) => {
  return (
    <div className='resCard'>
      <img src={CDN_URL + resObj.info.cloudinaryImageId} alt="" />
      <h1>{resObj.info.name}</h1>
      <h2>✅{resObj.info.avgRating} {resObj.info.sla.deliveryTime}-{resObj.info.sla.deliveryTime + 10} mins</h2>
      <h4>{resObj.info.costForTwo}</h4>
      <h4>{resObj.info.cuisines.join(", ")}</h4>

    </div>
  )
}

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className='promoted-card'>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    )
  }

}
