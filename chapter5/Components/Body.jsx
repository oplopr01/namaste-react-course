import React, { useEffect, useState } from 'react'
import { RestaurantCard } from "./RestaurantCard"
import Shimmer from './Shimmer';
// import { resList } from "../Utils/data"

const Body = () => {
    let [listOfRestaurent, setListOfRestaurent] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])
    let fetchData = async ()=>{
        let data =  await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING")
        let json = await data.json();

        setListOfRestaurent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    
    }

    if(listOfRestaurent.length === 0){
        return <Shimmer/>
    }

    return (
        <div id='body'>

            <div id='filter'>
                <button onClick={() => {
                    let filtered = listOfRestaurent.filter((ele) => ele.info.avgRating > 4.5);
                    setListOfRestaurent(filtered);
                }} id='filter-btn'>Top reted restaurant</button>
            </div>

            <div id="res-container">
                {listOfRestaurent.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)}
            </div>
        </div>
    )
}
export default Body