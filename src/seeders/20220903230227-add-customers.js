const bcrypt    = require('bcryptjs');
const { faker } = require('@faker-js/faker');

module.exports = {
  async up (queryInterface, Sequelize) {
     let dummyJSON = [];

     for(let i = 0 ; i < 50 ; i++){
        dummyJSON.push({
          full_name  : faker.name.fullName(),
          email      : faker.internet.email(),
          password   : await bcrypt.hash(faker.internet.password(), 10),
          birth_date : faker.date.between('1960-01-01', '2005-01-01'),
          deleted_at : null,
          created_at : new Date(),
          updated_at : new Date()
        });
     }
     
     await queryInterface.bulkInsert('customers',dummyJSON,{});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('customers', null, {});
  }
};
