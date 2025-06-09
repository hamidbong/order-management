const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let orders = [
  { id: 1, item: 'Laptop', quantity: 2 },
  { id: 2, item: 'Mouse', quantity: 5 }
];

// GET /orders
app.get('/orders', (req, res) => {
  res.json(orders);
});

// POST /orders
app.post('/orders', (req, res) => {
  const newOrder = {
    id: orders.length + 1,
    item: req.body.item,
    quantity: req.body.quantity
  };
  orders.push(newOrder);
  res.status(201).json(newOrder);
});

app.listen(port, () => {
  console.log(`order-service listening attfdgttsft http://localhost:${port}`);
});
