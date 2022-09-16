const { db, Student } = require("../domain/student");
const StudentOps = require("../dao/query-student");

const findStudentList = async () => {
  let studentList = await StudentOps.findStudentList();
  return studentList;
};

const findStudent = async (currentId) => {
  let student = await StudentOps.findStudent(currentId);
  return student;
};

const updateStudent = async (
  currentId,
  currentName,
  currentDob,
  currentScore
) => {
  let student = await StudentOps.updateStudent(
    currentId,
    currentName,
    currentDob,
    currentScore
  );
  return student;
};

const deleteStudent = async (currentId) => {
  let student = await StudentOps.deleteStudent(currentId);
  return student;
};
const addStudent = async (currentName, currentDob, currentScore) => {
  let student = await StudentOps.addStudent(
    currentName,
    currentDob,
    currentScore
  );
  return student;
};

module.exports = {
  findStudentList,
  findStudent,
  updateStudent,
  deleteStudent,
  addStudent,
};
