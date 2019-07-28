var express = require("express");
var cheerio = require("cheerio");
var axios = require("axios");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var logger = require("morgan");

var db = require("./models");

var app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");
