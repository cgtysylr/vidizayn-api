//Configs
require("dotenv").config();

//Modules
const express = require("express");
const helmet  = require("helmet");
const cors    = require("cors");
const path    = require('path')

//Routers
const routers = require("./src/routers");

//Models
require("./src/models");

//Init
const app = express();

app.use(helmet());

app.use(
    express.urlencoded({
      extended: true,
    })
  );

app.use(express.json());

app.use(cors());

app.use(routers);

const PORT = process.env.PORT || 4000;

app.listen(PORT, "0.0.0.0", () => {
    console.log("start port *", PORT);
  });
  