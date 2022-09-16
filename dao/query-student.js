const { db, Student } = require("../domain/student");

const findStudentList = async () => {
  try {
    await db.sync();
    const studentList = await Student.findAll();
    return studentList;
  } catch (e) {
    console.error(e);
  }
};

const findStudent = async (currentId) => {
  try {
    await db.sync();
    const student = await Student.findOne({
      where: { id: currentId },
    });
    return student;
  } catch (e) {
    console.error(e);
  }
};

const updateStudent = async (
  currentId,
  currentName,
  currentDob,
  currentScore
) => {
  try {
    await db.sync();
    await Student.update(
      { name: currentName, dob: currentDob, score: currentScore },
      {
        where: { id: currentId },
      }
    );
  } catch (e) {
    console.error(e);
  }
};

const deleteStudent = async (currentId) => {
  try {
    await db.sync();
    await Student.destroy({
      where: { id: currentId },
    });
  } catch (e) {
    console.error(e);
  }
};

const addStudent = async (currentName, currentDob, currentScore) => {
  try {
    await db.sync();
    await Student.create({
      name: currentName,
      dob: currentDob,
      score: currentScore,
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  findStudentList,
  findStudent,
  updateStudent,
  deleteStudent,
  addStudent,
};
