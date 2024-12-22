const express = require('express');
const auth = require('../middleware/auth');
const Cafe = require('../models/Cafe');
const FoodItem = require('../models/FoodItem');

const router = express.Router();

// Add a new cafe (for cafe owners)
router.post('/', auth, async (req, res) => {
  const { name } = req.body;
  const newCafe = new Cafe({ name });
  await newCafe.save();
  res.status(201).json(newCafe);
});

// Add a new food item (for cafe owners)
router.post('/:id/food', auth, async (req, res) => {
  const { name, price } = req.body;
  const newFoodItem = new FoodItem({ name, price, cafeId: req.params.id });
  await newFoodItem.save();
  res.status(201).json(newFoodItem);
});

module.exports = router;