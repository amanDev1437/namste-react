import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) =>{
    const {resData} = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,
    } = resData?.info;

    return(
        <>
        <div className="res-card">
            <img className="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} star</h4>
            <h4>Rs {costForTwo}</h4>
            <h4>{deliveryTime}</h4>
        </div>
        </>
        
    );
}

export default RestaurantCard; 