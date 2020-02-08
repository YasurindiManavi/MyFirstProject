const http = require('http');
const app = require('./app');

const port = 8000;

http.createServer(app)
    .listen(port, () => {
        console.log(`Your Server is running on port ${port}`);
    }); 