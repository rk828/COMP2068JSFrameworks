const connect = require('connect');
const url = require('url');

// Create a Connect app
const app = connect();

// Middleware to handle requests
app.use((req, res) => {
    const queryData = url.parse(req.url, true).query;
    const { method, x, y } = queryData;

    // Check if method, x, and y are provided
    if (!method || !x || isNaN(x) || !y || isNaN(y)) {
        res.end('Invalid parameters provided.');
        return;
    }

    let result;
    switch (method) {
        case 'add':
            result = parseFloat(x) + parseFloat(y);
            break;
        case 'subtract':
            result = parseFloat(x) - parseFloat(y);
            break;
        case 'multiply':
            result = parseFloat(x) * parseFloat(y);
            break;
        case 'divide':
            result = parseFloat(x) / parseFloat(y);
            break;
        default:
            res.end('Invalid method provided.');
            return;
    }

    res.end(`${x} ${method} ${y} = ${result}`);
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
