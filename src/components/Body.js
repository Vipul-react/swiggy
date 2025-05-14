import React, { useEffect, useState, useContext } from 'react'
import { RestaurantCard, withPromotedLabel } from './RestaurantCard'
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { RES_DATA } from '../utils/constant';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';


export const Body = () => {
  const [restaurantList, setRestaurantList] = useState([])
  const [showList, setShowList] = useState([])
  const [inputValue, setInputValue] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const isOnline = useOnlineStatus();
  
  const{ loggedInUser, setUserName} = useContext(UserContext)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(RES_DATA);
    const data = await response.json()
    setRestaurantList(data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setShowList(data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    // console.log(restaurantList)
  }
  // console.log(restaurantList)
  if (isOnline === false) {
    return (
      <h1>You are offline</h1>
    )
  }


  return restaurantList.length == 0 ? <Shimmer /> :
    <div className="body">
      <div className="filter-btn">
        <div className="search">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search the restaurant"
          />
          <button
            className='search-btn'
            onClick={() => {
              const filterList = restaurantList.filter((restaurant) =>
                restaurant.info.name.toLowerCase().includes(inputValue.toLowerCase())
              )
              setShowList(filterList)
              // console.log({ inputValue })
            }}
          >Search</button>
        </div>
        <button
          className="fil-btn"
          onClick={() => {
            console.log("clicked")
            const filterdList = restaurantList.filter(restaurant => (restaurant.info.avgRating > 4.4))
            setShowList(filterdList)
          }
          }
        >Top Rated Restaurant
        </button  >
        {/* <input 
        type="text" 
        value={loggedInUser} 
        onChange={(e) => setUserName(e.target.value)} 
        placeholder="  Enter your Name" 
      /> */}
      </div>
      <div className='cardContainer'>
        {showList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/menu/" + restaurant.info.id} >
            {restaurant.info.isOpen ? (
              <RestaurantCard resObj={restaurant} />
            ) : (
              <RestaurantCardPromoted resObj={restaurant} />
            )}
            {/* <RestaurantCard resObj={restaurant} /> */}
          </Link>
        ))}
      </div>
    </div>
}
