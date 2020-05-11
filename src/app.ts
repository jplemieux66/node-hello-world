import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import helloWorld from './routers/hello-world';

// Create a new express application instance
const app = express();

app.use(compression()).use(bodyParser.json()).use(helloWorld);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
