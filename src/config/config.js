module.exports = {
  development: { 
    username: 'root',
    password: '',
    database: 'vidizayn',
    host: 'localhost',
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql'
  }
};