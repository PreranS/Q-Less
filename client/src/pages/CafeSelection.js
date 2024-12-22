import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CafeSelection = ({ onSelectCafe }) => {
  const [cafes, setCafes] = useState([]);

  useEffect(() => {
    const fetchCafes = async () => {
      const response = await axios.get('/api/cafes');
      setCafes(response.data);
    };
    fetchCafes();
  }, []);

  return (
    <div>
      <h1>Select a Cafe</h1>
      {cafes.map(cafe => (
        <button key={cafe._id} onClick={() => onSelectCafe(cafe)}>
          {cafe.name}
        </button>
      ))}
    </div>
  );
};

export default CafeSelection;