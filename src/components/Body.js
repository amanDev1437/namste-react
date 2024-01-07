import React from "react";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";


const Body = () =>{

    let [listOfRestaurants, setListOfRestaurants]= useState([
        {
            data:{
                id:334474,
                name: "Meghana Foods",
                cloudinaryImageId:"e0vvulfbahjxjz6k4uwi",
                cuisines:["Burgers","Biryani","American",],
                costForTwo:40000,
                deliveryTime:36,
                avgRating: "3.8"
            }
        },
        {
            data:{
                id:334475,
                name: "Shiv Foods",
                cloudinaryImageId:"vpp0p2bjtxr3qnis6zug",
                cuisines:["Burgers","Biryani","American",],
                costForTwo:40000,
                deliveryTime:36,
                avgRating: "4.8"
            } 
        }
    ]);

    return(
        <div className="body">
           <div className="filter">
            <button className="filter-btn" onClick={() =>{
                let filteredList= listOfRestaurants.filter((res)  => res.data.avgRating>4);
                setListOfRestaurants(filteredList);
                
            }}>Top rated Restaurant</button>
           </div>
           <div className="res-container"> 
                {listOfRestaurants.map((restaurant)=>(
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}></RestaurantCard>
                ))}
           </div> 
        </div>
    );
}

export default Body;