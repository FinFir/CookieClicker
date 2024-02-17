const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Serve static files (including your HTML and JS)
app.use(express.static('public'));

// Endpoint to register a new user
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Check if the username already exists
  const users = getUsers();
  if (users.find(user => user.username === username)) {
    return res.status(400).json({ error: 'Username already exists' });
  }

  // Save the new user
  const newUser = { username, password };
  users.push(newUser);
  saveUsers(users);

  res.json({ message: 'User registered successfully' });
});

// Endpoint to authenticate a user
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the username and password match
  const users = getUsers();
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  res.json({ message: 'Login successful' });
});

// Endpoint to get all registered users (for demonstration purposes)
app.get('/users', (req, res) => {
  const users = getUsers();
  res.json(users);
});

function getUsers() {
  const data = fs.readFileSync('users.json');
  return JSON.parse(data);
}

function saveUsers(users) {
  fs.writeFileSync('users.json', JSON.stringify(users));
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
