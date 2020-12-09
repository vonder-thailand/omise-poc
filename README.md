Flow Omise POC

# Goal create subscription plan

### V.1 POC basic charge flow

- Token = one time use credit card data

  - create // create token one time
  - retrieve // get token information cannot get token data only in same request when you create token

- Customer = user data that can attach with token card
  - create // create customer
  - update // update data can update card to customer in this method

Ex 1: Token -> Charge // one time buy without save customer data
EX 2: Token -> Customer -> Charge // next time can use customer data to buy again

- Charge = normal pay one time per transaction

  - create // amount in thb use (satang) so if you want to set 100 thb set 10000 (satang)
    - Charge a card using token // one time and we done
    - Charge a card using customer // use default card from user
    - Charge a card using customer and card // selected card data from user
  - update // update charge
  - retrieve // get charge detail
  - list // list all charge paginate
  - capture // if charge not automaticlly capture move money to omise balance
  - reverse // cancel charge by merchant to make dispute later
  - expire // set charge to expire maybe not use for now
  - createRefund
  - listRefunds
  - retrieveRefund

- Schedules = subscription pay plan

### POC Later

- Source = pay with custom payment method like internet banking or promptpay (Cont.)

- Transfer = move money hold in omise account to your real account do it manually

Ex 1: Token -> Charge -> Transfer // get money

- Link = generate link to pay

- Disputes = when reverse charge state change to disputes

- Event = can list all event happen in account

- Transactions = list all transactions

- Recipients = add multiple account to get money
