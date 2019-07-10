// eslint-disable-next-line linebreak-style
import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: false,
}));

export default app;
