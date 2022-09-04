//Models
const Customer = require("../models/Customer");

//Utils
const Result = require("../utils/Result");

class CustomerService {

    async getAll() {
      return await db.Customer.findAll();
    }

    async create(params) {

      const customer = new db.Customer(params);
      
      // hash password
      customer.passwordHash = await bcrypt.hash(params.password, 10);
  
      // save customer
      await customer.save();
  }

  }
  
  module.exports = CustomerService;
  