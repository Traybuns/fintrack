const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/transactions', (req, res) => {
  res.json([{ id: 1, amount: 50 }, { id: 2, amount: 75 }]);
});

const PORT = process.env.PORT || 5001; // Changed to 5001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;