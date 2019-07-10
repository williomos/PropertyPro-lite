/* eslint-disable no-console */
/* eslint-disable no-undef */
import app from "./app";


const port = process.env.PORT || 5000;

app.listen(port);

console.log('server started on port', port);
