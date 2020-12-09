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

app.post("/customer", async (req, res) => {
  try {
    const response = await customerRepo.createCustomer(req.body);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

app.post("/customer/card", async (req, res) => {
  try {
    const response = await customerRepo.addCardToCustomer(req.body);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

app.post("/charge", async (req, res) => {
  try {
    const response = await chargeRepo.createCharge(req.body);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

app.get("/customers", async (req, res) => {
  const response = await customerRepo.listCustomer();
  res.send(response);
});

app.get("/token", async (req, res) => {
  try {
    const response = await cardRepo.getToken(req.query.tokenId);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
