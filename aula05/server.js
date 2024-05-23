// Import required modules
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Create Express app
const app = express();
const port = 3000;

app.use(cors()); // Use CORS middleware
// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sample JSON data
let jsonData = {
  message: "Hello, world!"
};


// GET endpoint to retrieve JSON data
app.get('/data', (req, res) => {

  console.log(jsonData);
  res.json(jsonData);
  
});
// POST endpoint to update JSON data
app.post('/data', async (req, res) => {
  // Assuming JSON data is sent in the request body
  const newData = req.body;
  console.log('dd', req.body);
  // Update the JSON data
  jsonData = newData;

  // Send response
  res.redirect('http://127.0.0.1:5500/aula05/index.html');
  // res.json({ message: "Data updated successfully" });
});
// Another POST endpoint to update JSON data


// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
