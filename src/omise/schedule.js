const { omise } = require("./index");

/**
 * @param {number} every any number
 * @param {string} period (day, week, month)
 * @param {Ion} on? Object specifying schedule timing.
 * @param {string} start_date Start date of schedule in ISO 8601 format.
 * @param {string} end_date End date of schedule in ISO 8601 format.
 * @param {Charge} charge object charge
 *
 * @object Ion
 * @param {string[]} weekdays? Ex: ['monday', 'friday']
 * @param {number[]} days_of_month? Ex: [1,10,15]
 * @param {string} weekday_of_month? Ex: '2nd_monday'
 *
 * @object Charge
 * @param {number} amount
 * @param {string} currency 'thb'
 * @param {string} description
 * @param {string} customer customerId
 * @param {string} card cardId
 */

// TODO: check charge object is optional or not
module.exports.createSchedule = async (params) => {
  return await omise.schedules.create(params);
};
