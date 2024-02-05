<<<<<<< HEAD
import React from 'react'
import {CDN_URL} from "../Utils/Constant"

export const RestaurantCard = (props) => {
  const {resData} =props;
  const {
    cloudinaryImageId, 
    name,
    avgRating,
    cuisines,
    costForTwo
  } = resData.info;
  const { deliveryTime} = resData.info.sla;
  return (
    <div id='res-card'>
      <img className='resLogo' src={CDN_URL + cloudinaryImageId} alt="food img here" />
      <h3> {name} </h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating} stars</h3>
      <h3>{costForTwo} </h3>
      <h3>deliveryTime: {deliveryTime} minutes </h3>
    </div>
  )
}

=======
import React from 'react'
import {CDN_URL} from "../Utils/Constant"

export const RestaurantCard = (props) => {
  const {resData} =props;
  const {
    cloudinaryImageId, 
    name,
    avgRating,
    cuisines,
    costForTwo
  } = resData.info;
  const { deliveryTime} = resData.info.sla;
  return (
    <div id='res-card'>
      <img className='resLogo' src={CDN_URL + cloudinaryImageId} alt="food img here" />
      <h3> {name} </h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating} stars</h3>
      <h3>{costForTwo} </h3>
      <h3>deliveryTime: {deliveryTime} minutes </h3>
    </div>
  )
}

>>>>>>> 2a154504faf6c65ad14f9e8569c60b8803533953
// export default RestaurantCard