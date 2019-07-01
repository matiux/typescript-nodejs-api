// import "reflect-metadata";
// // import { createConnection } from "typeorm";
// import * as express from "express";
// import * as bodyParser from "body-parser";
// // import * as helmet from "helmet";
// import * as cors from "cors";
// import routes from "./routes";

// //Connects to the Database -> then starts the express
// createConnection()
//   .then(async connection => {
//     // Create a new express application instance
//     const app = express();

//     // Call midlewares
//     app.use(cors());
//     app.use(helmet());
//     app.use(bodyParser.json());

//     //Set all routes from routes folder
//     app.use("/", routes);

//     app.listen(3000, () => {
//       console.log("Server started on port 3000!");
//     });
//   })
//   .catch(error => console.log(error));

// https://medium.com/javascript-in-plain-english/creating-a-rest-api-with-jwt-authentication-and-role-based-authorization-using-typescript-fbfa3cab22a4

import express = require('express');
import * as cors from "cors";
import routes from "./routes";

// Create a new express application instance
const app: express.Application = express();

app.use(cors());

app.use("/", routes);

// app.get('/', function (req, res) {
//     res.send(messages.hello);
// });

app.listen(process.env.PORT, function () {
    console.log('Example app listening on port ' + process.env.PORT);
});