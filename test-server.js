const http = require('http');


const app = http.createServer((re, res, next) => {
    ////
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Hello')
});