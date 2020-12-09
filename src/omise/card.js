const { omise } = require("./index");

/**
 * { card: Object }
 * @param {string} name
 * @param {string} city
 * @param {number | string} postal_code
 * @param {string} number
 * @param {number | string} expiration_month
 * @param {number | string} expiration_year
 * @param {string} security_code
 */
module.exports.createToken = async (params) => {
  return await omise.tokens.create(params);
};

/**
 * @param {*} tokenId
 */
module.exports.getToken = async (params) => {
  return await omise.tokens.retrieve(params);
};
