const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyparser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const path = require("path");
const multer = require("multer");
///////////// ********USE *******/////////////////////////
app.use("/images", express.static("./images"));
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT"],
    credentials: true,
  })
);
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    key: "blog-reactjs",
    secret: "somethingrandom",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 25,
    },
  })
);
//////////////********* db connection ************////////////////////
const db = mysql.createConnection({
  password: "",
  host: "localhost",
  user: "root",
  database: "blog_react",
});
//////////////////************ multer setup **************////////////
const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "../client/src/imgs");
  },
  filename: (req, file, callBack) => {
    callBack(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });
/////////////************** create post**********//////////////////////////
app.post("/createpost", upload.single("file"), (req, res) => {
  const isertData =
    "INSERT INTO post(image , content ,postedBy) VALUES (?,?,?)";
  const content = req.body.content;
  const postedBy = req.body.postedBy;
  const imgsrc = req.file.filename;
  if (!req.file) {
    console.log("first");
  } else {
    db.query(isertData, [imgsrc, content, postedBy], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  }
});
//////////////////************* show post *****************/
app.get("/posts", (req, res) => {
  db.query("SELECT * FROM post", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/userposts", (req, res) => {
  const selectData = "SELECT * FROM post WHERE postedBy = ?";
  const postedBy = req.body.user;
  console.log(req.session.user[0].firstname);
  db.query(selectData, [req.session.user[0].firstname], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});
////////////////////*********register**************/
app.post("/register", (req, res) => {
  const insert =
    "INSERT INTO users (email,firstname,lastname,password) VALUES (?,?,?,?)";
  const select = "SELECT email FROM users WHERE email = ?";
  const email = req.body.email;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const password = req.body.password;
  db.query(select, email, (err, selectResult) => {
    if (err) {
      console.log(err);
    }
    if (!selectResult.length) {
      db.query(
        insert,
        [email, firstname, lastname, password],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );
    } else {
      res.send({ message: "email already exist !" });
    }
  });
});
//////////////////////************Login********* */
app.post("/login", (req, res) => {
  const longinState = "SELECT * FROM users WHERE email = ? AND password = ?";
  const { email, password } = req.body;
  //const password = req.body.password
  db.query(longinState, [email, password], (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.length > 0) {
      req.session.user = result;
      res.send(result);
    } else {
      res.send({ message: "Information incorrect ! try another time" });
    }
  });
});
app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ logged: true, user: req.session.user });
  } else {
    res.send({ logged: false });
  }
});
app.listen(3001, () => {
  console.log("Server running on 3001");
});
