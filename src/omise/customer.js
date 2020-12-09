const { omise } = require("./index");

const cardRepo = require("./card");

/**
 * @param {*} email?: string;
 * @param {*} description?: string;
 * @param {*} card?: string;
 * @param {*} metadata?: any;
 * TODO: send card data with customer data too
 */
module.exports.createCustomer = async (params) => {
  const { card, customer } = params;
  if (!card || !customer) {
    throw {
      message: "invalid card or customer params",
    };
  }
  console.log("card: ", card);
  const token = await cardRepo.createToken({ card });
  console.log("token: ", token);
  if (token) {
    const getToken = await cardRepo.getToken(token.id);
    console.log("getToken: ", getToken);
    customer.card = token.id;
  }
  console.log("customer: ", customer);
  return await omise.customers.create(customer);
};

/**
 * @param {*} customerId?: string;
 * @param {*} card?: Object Card;
 */

module.exports.addCardToCustomer = async (params) => {
  const { card, customerId } = params;
  if (!card) {
    throw {
      message: "invalid card params",
    };
  }
  console.log("card: ", card);
  const token = await cardRepo.createToken({ card });
  console.log("token: ", token);
  return await omise.customers.update(customerId, { card: token.id });
};

module.exports.listCustomer = async () => {
  return await omise.customers.list();
};
