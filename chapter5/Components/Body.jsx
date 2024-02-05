<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { RestaurantCard } from "./RestaurantCard"
import Shimmer from './Shimmer';
// import { resList } from "../Utils/data"

const Body = () => {
    let [listOfRestaurent, setListOfRestaurent] = useState([]);

    let [filteredListOfRestaurent, setfilteredListOfRestaurent ] =useState([])
    let [serachText, setSerachText] = useState("")

    useEffect(() => {
        fetchData();
    }, [])
    let fetchData = async () => {
        let data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING")
        let json = await data.json();

        setListOfRestaurent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setfilteredListOfRestaurent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }


    return listOfRestaurent.length === 0 ? <Shimmer /> : (
        <div id='body'>
            <div id='filter'>
                {/* <<<--- Code to search functionality  -->>> */}
                <div id="searchRestaurent">
                    <input placeholder='restaurent name' value={serachText} onChange={(e) => setSerachText(e.target.value)} type="text" />
                    <button onClick={() => {
                        let searchFiltered = listOfRestaurent.filter((ele) => ele.info.name.toLowerCase().includes(serachText.toLowerCase()))
                        if(searchFiltered.length ==0){
                            alert("no result")
                        }
                        else{
                            setfilteredListOfRestaurent(searchFiltered);
                        }
                        console.log(searchFiltered);
                    }}>Search</button>
                </div>   {/* <<<--- Code to search functionality  ENDED -->>> */}

                {/* <<<< ---- code to show top rated restaurents only---->>>> */}
                <button onClick={() => {
                    let filtered = listOfRestaurent.filter((ele) => ele.info.avgRating > 4.5);
                    setListOfRestaurent(filtered);
                }} id='filter-btn'>Top reted restaurant</button>
            </div>  {/* <<<< ---- code to show top rated restaurents only  ENDED---->>>> */}

            {/* == Main container where all cards will visible == */}
            <div id="res-container">
                {filteredListOfRestaurent.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)}
            </div >     {/* == Main container where all cards will visible, ENDED == */}

        </div>
    )
}
=======
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
>>>>>>> 2a154504faf6c65ad14f9e8569c60b8803533953
export default Body