import http from 'node:http'

// Define the port number for the server
const PORT = 8000

// Create an HTTP server
const server = http.createServer((req, res)=> {
    // Write the request URL to the response
    res.write(`req.url => ${req.url}\n`)
    // Write the request method to the response
    res.write(`req.method => ${req.method}\n`)
    // Check if the request is for the '/api' endpoint with GET method
    if(req.url === '/api' && req.method === 'GET'){
        // Write a greeting message to the response
        res.write('Hi, from the server\n');
    }
        // End the response with a final message
        res.end('Hello from the serveR');
    
})

// Start the server and listen on the specified port
server.listen(PORT, ()=> console.log(`Server running at: http://localhost:${PORT}/api`))