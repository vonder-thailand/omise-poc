const { omise } = require("./index");

/**
 * { card: Object }
 * @param {integer} amount amount must contain like 100 thb but send 10000
 * @param {currency} currency Ex: 'thb'
 * @param {object_id} customer? Required if passing a card identifier in the card parameter. If passing a token identifier in the card parameter, this parameter must not be present.
 * @param {object_id} card? If a token identifier is passed, the customer parameter must not be present.
 * @param {string} return_uri? Required if account is set to use 3-D Secure or any other redirect-based authorization for payment.
 * @param {object_id} source? Required if card and customer are not present.
 * @param {string} description? (optional, but recommended)
 * @param {boolean} capture? Whether charge is set to be automatically captured (paid)
 * @param {string} metadata?
 */

module.exports.createCharge = async (params) => {
  return await omise.charges.create(params);
};
