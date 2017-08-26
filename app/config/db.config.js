const Sequelize = require('sequelize');
const path = require('path');
/**
 * Define paths to each model
 */
const modelPaths = [
  path.join(__dirname, '/../models/ImpressionModel.js'),
];
const DB_HOST="koala.cpgwf92x8zbm.us-west-2.rds.amazonaws.com"
const DB_PORT=3306
const DB_DATABASE="koala"
const DB_USER="temp"
const DB_PASS="kho@Db"

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
})

/**
 * Verify SQL connection has been established
 */
sequelize
  .authenticate()
  .then(message => {
    console.log('SQL Connection established to:', DB_HOST);
  })
  .catch(err => {
    throw err;
  });

const db = {};

/**
 * Allows us to reference each model from the db object
 * so we don't need to require different paths for different
 * models each time we need to access a model
 */
modelPaths.forEach(path => {
  let model = sequelize.import(path);
  db[model.name] = model;
});

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

