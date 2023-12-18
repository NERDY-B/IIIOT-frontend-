import express from 'express'
import axios from 'axios'

const app = express()

app.use(express.json())

app.post('/api/testLogin', async(req, res) => {
    const url = 'https://industrialiot.onrender.com/api/login';

// Assuming you have a payload to send in the request body, replace {} with your actual payload
const payload = {
  email: req.email,
  password: req.password
};

const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers if needed
  },
  body: JSON.stringify(payload),
};

try {
  const response = await fetch(url, requestOptions);

  if (!response.ok) {
    // Handle non-successful response (status code other than 2xx)
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // Parse the response body as needed
  const data = await response.json();

  // Use the data or perform further actions
  console.log('Response data:', data);
} catch (error) {
  // Handle errors during the fetch operation
  console.error('Fetch error:', error.message);
}

    // try {
    //     // const data = await axios.post(`https://industrialiot.onrender.com/api/login`)
    //     // console.log(JSON.stringify(data))
    // } catch (error) {
        
    // }
    // console.log(req.body)

})

app.listen(5001, console.log('server is running on port 5001'))
//for server to run or in server file we must have a listen method that specifies the port for the server
// to run on , what then is a port ?