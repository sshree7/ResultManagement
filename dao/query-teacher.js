const { db, Teacher } = require("../domain/teacher");
const findTeacher = async (name) => {
  try {
    await db.sync();
    const teacher = await Teacher.findOne({ where: { username: name } });
    return teacher;
  } catch (e) {
    console.error(e);
  }
};

module.exports = { findTeacher };
