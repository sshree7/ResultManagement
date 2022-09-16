const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

const db = new Sequelize("result_management", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const Teacher = db.define(
  "teacher",
  {
    username: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: "01-01-2000",
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = {
  db,
  Teacher,
};

db.sync()
  .then(() => console.log("Database Synchronized"))
  .catch(console.error);
