import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register'; // Import Register component
import CafeSelection from './pages/CafeSelection';
import FoodSelection from './pages/FoodSelection';
import OrderPage from './pages/OrderPage';

const App = () => {
  const [selectedCafe, setSelectedCafe] = useState(null);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleSelectCafe = (cafe) => {
    setSelectedCafe(cafe);
  };

  const handlePlaceOrder = () => {
    const order = {
      items: cart,
      total: cart.reduce((acc, item) => acc + item.price, 0),
    };
    // Redirect to OrderPage with order details
    // Implement navigation logic here
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} /> {/* Add Register route */}
        <Route path="/cafes" exact>
          <CafeSelection onSelectCafe={handleSelectCafe} />
        </Route>
        <Route path="/food" exact>
          {selectedCafe && (
            <FoodSelection cafeId={selectedCafe._id} onAddToCart={handleAddToCart} />
          )}
        </Route>
        <Route path="/order" exact>
          <OrderPage order={{ items: cart, total: cart.reduce((acc, item) => acc + item.price, 0) }} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;