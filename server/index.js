const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/validate', (req, res) => {
  const { emailOrPhone } = req.body;
  if (!emailOrPhone || !isValidEmailOrPhone(emailOrPhone)) {
    return res.status(400).json({ error: 'Invalid mobile number or email address' });
  }
  res.status(200).json({ message: 'Valid' });
});

function isValidEmailOrPhone(input) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;
  return emailRegex.test(input) || phoneRegex.test(input);
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
