// Import the 'http' module to create an HTTP server
import http from "node:http";

// Import the 'getDataFromDB' function from the local database module
import { getDataFromDB } from "./database/db.js";
import { JSONresponse } from "./utils/sendJSONresponse.js";
import { bd } from "./data/data.js";

// Define the port number for the server
const PORT = 8000;

// Create an HTTP server
const server = http.createServer(async (req, res) => {
  // Fetch destinations data from the database
  let destinations = await getDataFromDB();

  // Handle GET requests to the '/api' endpoint
  if (req.url === "/api" && req.method === "GET") {

    // Send all destinations as JSON response
    JSONresponse(res, 200, destinations);

  } else if (req.url.startsWith("/api/continent") && req.method === "GET") {

    // Extract the continent name from the URL
    const continent = req.url.split("/").pop();

    // Filter destinations by the specified continent (case-insensitive)
    const filteredData = destinations.filter((dest) => {
      return dest.continent.toLowerCase() === continent.toLowerCase();
    });
    // Send the filtered data as JSON response
    JSONresponse(res, 200, filteredData);

  } else if (req.url.startsWith("/api/country") && req.method === "GET") {

    // Extract the country name from the URL
    const country = req.url.split("/").pop();

    // Filter destinations by the specified country (case-insensitive)
    const filteredData = destinations.filter((dest) => {
      return dest.country.toLowerCase() === country.toLowerCase();
    });

    // Send the filtered data as JSON response
    JSONresponse(res, 200, filteredData);

  }
  // Handle all other routes
  else {

    // Send a 404 response with default data
    JSONresponse(res, 404, bd);
    
  }
});

// Start the server and listen on the specified port
server.listen(PORT, () =>
  console.log(`Server running at: http://localhost:${PORT}/api`)
);
