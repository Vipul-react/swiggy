import React, { useEffect, useState } from 'react'
import { MENU } from './constant';

const useRestaurantMenu = (id) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        const response = await fetch(MENU+id) 
        const json = await response.json();
        setResInfo(json.data)
      }
  return resInfo;
}

export default useRestaurantMenu
