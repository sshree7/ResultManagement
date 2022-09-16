const Sequelize = require("sequelize");

const db = new Sequelize("result_management", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

db.authenticate()
  .then(() => console.log("Connection Worked!!"))
  .catch((err) => console.error(err));
