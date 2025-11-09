export const JSONresponse = (res, statusCode, payload) => {
    // Set the Content-Type header to indicate JSON response
    res.setHeader('Content-Type', 'application/json');

    // Enable CORS by allowing requests from any origin
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Specify the allowed HTTP methods for CORS
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    // Set the HTTP status code for the response
    res.statusCode = statusCode;

    // Convert the payload to a JSON string and send it as the response
    res.end(JSON.stringify(payload));
}