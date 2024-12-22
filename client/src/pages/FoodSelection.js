import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FoodSelection = ({ cafeId, onAddToCart }) => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const fetchFoodItems = async () => {
      const response = await axios.get(`/api/cafes/${cafeId}/food`);
      setFoodItems(response.data);
    };
    fetchFoodItems();
  }, [cafeId]);

  return (
    <div>
      <h1>Select Food</h1>
      {foodItems.map(item => (
        <button key={item._id} onClick={() => onAddToCart(item)}>
          {item.name} - ${item.price}
        </button>
      ))}
    </div>
  );
};

export default FoodSelection;