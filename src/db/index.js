const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.PG_URL);

sequelize
  .authenticate()
  .then(() => {
    console.log("connected successfully");
  })
  .catch((err) => {
    console.log("unable to connect to the database:", err);
  });

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((err) => {
    console.log("error creating database:", err);
  });

module.exports = sequelize;
