const {db, Teacher} = require ('../domain/teacher');
const teacherOps = require ('../dao/query-teacher');

const getTeacher =async (name) =>{
    let teacher = await teacherOps.findTeacher(name);
    console.log(teacher);
    return teacher; 
}

module.exports = {getTeacher};


