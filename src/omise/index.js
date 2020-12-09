const { PUBLIC_KEY, SECRET_KEY } = process.env;

module.exports.omise = require("omise")({
  publicKey: PUBLIC_KEY,
  secretKey: SECRET_KEY,
  omiseVersion: "2017-11-02",
});

// const promptpayCharge = async (tokenId) => {
//   const charge = await omise.charges.create({
//     description: "Charge for order ID: 888",
//     amount: "100000", // 1,000 Baht
//     currency: "thb",
//     capture: false,
//     card: tokenId,
//     source: {
//       type: "promptpay",
//     },
//   });
//   return charge;
// };

// module.exports.listCustomer = async () => {
//   return await omise.customers.list();
// };

// const listSchedule = async () => {
//   return await omise.charges.list();
// };

// const fn = async () => {
//   try {
//     // const tokenCreate = await omise.tokens.create({
//     //   card: {
//     //     name: "JOHN DOE",
//     //     city: "Bangkok",
//     //     postal_code: 10320,
//     //     number: "4242424242424242",
//     //     expiration_month: 2,
//     //     expiration_year: 2022,
//     //     security_code: 123,
//     //   },
//     // });
//     // console.log("tokenCreate: ", tokenCreate);
//     // const tokenId = tokenCreate.id;
//     // const token = await omise.tokens.retrieve(tokenCreate.id);
//     // console.log("token: ", token);
//     // const customer = await omise.customers.create({
//     //   email: "john.doe@example.com",
//     //   description: "John Doe (id: 30)",
//     //   card: tokenId, //tokenId
//     // });
//     // const source = await omise.sources.create({
//     //   type: "promptpay",
//     //   amount: "100000",
//     //   currency: "THB",
//     // });
//     // console.log("source: ", source);
//     // const allCustomer = await listCustomer();
//     // const firstCustomer = allCustomer.data[0];
//     // console.log("firstCustomer: ", firstCustomer);
//     // const sub = await omise.schedules.create({
//     //   period: "month",
//     //   every: 12,
//     //   on: {
//     //     days_of_month: [1],
//     //   },
//     //   start_date: "2020-12-10",
//     //   end_date: "2021-12-10",
//     //   charge: {
//     //     customer: firstCustomer.id,
//     //     card: firstCustomer.default_card,
//     //     amount: 70000,
//     //     description: "Yearly Plan Pro",
//     //   },
//     // });
//     // console.log("sub: ", sub);
//     const allSchedule = await listSchedule();
//     console.log("allSchedule: ", allSchedule);
//   } catch (error) {
//     console.log("error: ", error);
//   }
// };

// fn();

// // {
// //     data: [question]
// //     setting : [go]
// // }

// // {
// //     data: [question]
// //     setting : [falsh]
// // }
