module.exports = (sequelize, DataTypes) => {
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
      price:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      category:{
        type: DataTypes.STRING,
        allowNull:true
      },
      isSecondHand:{
        type:DataTypes.BOOLEAN,
        allowNull:true,
      },
      isbn:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
      }
    },
    {
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Book;
};
