const dbConfig = require('../config/db_config.json');
const Sequelize = require('sequelize');
const fs = require('fs');

let dbDetails =
  'postgres://' +
  dbConfig.development.username +
  ':' +
  dbConfig.development.password +
  '@' +
  dbConfig.development.host +
  ':' +
  dbConfig.development.port +
  '/' +
  dbConfig.development.database;

const sequelize = new Sequelize(dbDetails, {
  dialect: dbConfig.dialect,
  define: {
    timestamps: false,
    freezeTableName: true,
  },
});

let db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.package = require('./package.model')(sequelize, Sequelize);
db.modules = require('./modules.model')(sequelize, Sequelize);
db.pckmodules = require('./pckmodules.model')(sequelize, Sequelize, db);
db.industry = require('./industry.model')(sequelize, Sequelize, db);
db.status = require('./status.model')(sequelize, Sequelize);
db.subscription = require('./subscription.model')(sequelize, Sequelize);
db.users = require('./users.model')(sequelize, Sequelize);
db.roles = require('./roles.model')(sequelize, Sequelize);
db.user_role_maping = require('./user_role_maping.model')(
  sequelize,
  Sequelize,
  db
);
db.country = require('./country.model')(sequelize, Sequelize, db);
db.state = require('./states.model')(sequelize, Sequelize, db);
db.city = require('./city.model')(sequelize, Sequelize, db);
db.company = require('./company.model')(sequelize, Sequelize, db);
db.promocode = require('./promocode.model')(sequelize, Sequelize);
db.company_package = require('./company_package.model')(
  sequelize,
  Sequelize,
  db
);

module.exports = db;

