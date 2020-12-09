require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const customerRepo = require("./src/omise/customer");
const cardRepo = require("./src/omise/card");
const chargeRepo = require("./src/omise/charge");
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to Omise POC");
});

const controllerPost = (fn) => async (req, res) => {
  try {
    const response = await fn(req.body);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
};

const controllerGet = (fn) => async (req, res) => {
  try {
    const response = await fn(req.query);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
};

const controller = (fn) => async (req, res) => {
  try {
    const response = await fn();
    res.send(response);
  } catch (error) {
    res.send(error);
  }
};

app.post("/customer", controllerPost(customerRepo.createCustomer));

app.post("/customer/card", controllerPost(customerRepo.addCardToCustomer));

app.post("/charge", controllerPost(chargeRepo.createCharge));

app.get("/customers", controller(customerRepo.listCustomer));

app.get("/token", controllerGet(cardRepo.getToken));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
