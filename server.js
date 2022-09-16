const express = require("express");
const app = express();
const port = 3000;
const teacherOps = require("./service/teacher-service");
//const studentOps = require("./service/student-service");
const studentOps = require("./dao/query-student");

app.set("view-engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/StudentLogin", (req, res) => {
  res.render("student-login.ejs");
});

app.get("/TeacherLogin", (req, res) => {
  res.render("teacher-login.ejs");
});

app.get("/ResultList", async (req, res) => {
  try {
    let student = await studentOps.findStudentList();
    res.render("result-list.ejs", {
      studentList: student,
    });
  } catch {
    res.redirect("/TeacherLogin");
  }
});

app.get("/AddStudent", (req, res) => {
  res.render("add-new-student.ejs");
});

app.post("/ResultList", async (req, res) => {
  try {
    let result = await teacherOps.getTeacher(req.body.username);
    if (result.dataValues.password == req.body.password) {
      // req.session.username=req.body.username;
      // req.session.password=req.body.password;
      let student = await studentOps.findStudentList();
      res.render("result-list.ejs", {
        studentList: student,
      });
    } else {
      res.redirect("/TeacherLogin");
    }
  } catch {
    res.redirect("/TeacherLogin");
  }
});

app.post("/Result", async (req, res) => {
  try {
    let result = await studentOps.findStudent(req.body.rollNo);
    if (result.dataValues.dob == req.body.dob) {
      res.render("result.ejs", {
        student: result,
      });
    } else {
      res.redirect("/StudentLogin");
    }
  } catch {
    res.redirect("/StudentLogin");
  }
});

app.post("/NewStudent", async (req, res) => {
  try {
    await studentOps.addStudent(req.body.name, req.body.dob, req.body.score);
    let student = await studentOps.findStudentList();
    res.render("result-list.ejs", {
      studentList: student,
    });
  } catch {
    res.redirect("/StudentLogin");
  }
});

app.get("/delete/:id", async (req, res) => {
  try {
    await studentOps.deleteStudent(parseInt(req.params.id));
    res.redirect("/ResultList");
  } catch {
    res.redirect("/TeacherLogin");
  }
});

app.get("/edit/:id", async (req, res) => {
  try {
    let studentId = parseInt(req.params.id);
    let result = await studentOps.findStudent(studentId);
    res.render("edit-student.ejs", {
      student: result,
    });
  } catch {
    res.redirect("/TeacherLogin");
  }
});

app.post("/UpdateStudent", async (req, res) => {
  try {
    await studentOps.updateStudent(
      req.body.id,
      req.body.name,
      req.body.dob,
      req.body.score
    );
    res.redirect("/ResultList");
  } catch {
    res.redirect("/StudentLogin");
  }
});

// app.get("/ResultList", async (req, res) => {
//   try {
//     let result = await teacherOps.getTeacher(req.session.username);
//     if (result.dataValues.password == req.session.password) {
//       let student = await studentOps.findStudentList();
//       res.render("result-list.ejs", {
//         studentList: student,
//       });
//     } else {
//       res.redirect("/TeacherLogin");
//     }
//   } catch {
//     res.redirect("/TeacherLogin");
//   }
// });

app.listen(port, () => {
  console.log("Server started");
});
