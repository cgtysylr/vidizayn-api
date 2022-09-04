//Services
const CustomerService = require("../services/CustomerService");

//Init
const customerService = new CustomerService();

const list = async (req, res) => {
    console.log('Customer LIST');
    
    const result = await customerService.getAll();
    
    return res.json(result);
};
  
module.exports = { list };