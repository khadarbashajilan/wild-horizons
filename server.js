// Import the 'http' module to create an HTTP server
import http from 'node:http'

// Import the 'getDataFromDB' function from the local database module
import { getDataFromDB } from './database/db.js';

// Define the port number for the server
const PORT = 8000

// Create an HTTP server
const server =  http.createServer(async (req, res)=> {

    // Fetch destinations data from the database
    let destinations = await getDataFromDB();

    // Convert the destinations data to a JSON string
    destinations = JSON.stringify(destinations)

    // Handle GET requests to the '/api' endpoint
    if(req.url === '/api' && req.method === 'GET'){
        // Set the response header to indicate JSON content
        res.setHeader('Content-Type', 'application/json')

        // Set the response status code to 200 (OK)
        res.statusCode = 200

        // Send the destinations data as the response
        res.end(`${destinations}`);
    }else{

        res.setHeader('ContentType', 'application/json')

        // error or bad request
        res.statusCode = 404

        res.end(JSON.stringify({error: "not found", message: "The requested route does not exist"}))

    }


})

// Start the server and listen on the specified port
server.listen(PORT, ()=> console.log(`Server running at: http://localhost:${PORT}/api`))