const sequelize = require("../db/index");
const { DataTypes } = require("sequelize");

const Book = sequelize.define(
  "book",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

Book.sync({ force: false }).then(() => {
  console.log("Book table created successfully");
});

module.exports = Book;
