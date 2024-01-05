import React from "react";
import ReactDOM  from "react-dom/client";

const Header = () =>{
    return(
        <div className="header">
            <div className="logo">
                <img className="logo" src="https://static.vecteezy.com/system/resources/thumbnails/011/468/885/small/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    );
}



const RestaurantCard = (props) =>{
    return(
        <div className="res-card">
             <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/89fccaa76f2f760e2742b9e53d32bb69"/>
            <h4>{props.resName}</h4>
            <h4>{props.cuisine}</h4>
            <h4>{props.rating}</h4>
            <h4>{props.time}</h4>
        </div>
    );
}

const Body = () =>{
    return(
        <div className="body">
           <div className="search">Search</div>
           <div className="res-container"> 
             <RestaurantCard 
             resName="Shiv foods"
             cuisine="Biriyani, North-Indian"
             rating="3.5 star"
             time="38"

             />
             <RestaurantCard 
             resName="Pal Dhaba" 
             cuisine="Paneer, South-Indian"
             rating="4 star"
             time="20"

             />
           </div> 
        </div>
    );
}
const AppLayout = () =>{
    return(
        <div className="app">
            <Header></Header>
            <Body></Body>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout></AppLayout>);  