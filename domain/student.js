const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

const db = new Sequelize("result_management", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const Student = db.define(
  "student",
  {
    name: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },

    dob: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: "01-01-2000",
    },
    score: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = {
  db,
  Student,
};

db.sync()
  .then(() => console.log("Database Synchronized"))
  .catch(console.error);
