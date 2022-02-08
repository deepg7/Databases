const {Sequelize,DataTypes} = require("sequelize");
const sequelize = new Sequelize(process.env.PG_URL);

sequelize
  .authenticate()
  .then(() => {
    console.log("connected successfully");
  })
  .catch((err) => {
    console.log("unable to connect to the database:", err);
  });

const db={};
db.Sequelize=Sequelize;
db.sequelize=sequelize;
db.books=require("../models/book")(sequelize, DataTypes);

sequelize
  .sync({ force: false })                          
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((err) => {
    console.log("error creating database:", err);
  });

                                                        // force:true will be helpful in developing stage
                                                        // force:false will be helpful in production 

module.exports = db;
