const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee");

const port = 3001;
const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

mongoose
  .connect("mongodb://localhost:27017/employee")
  .then(() => console.log("MongoDb connected"))
  .catch((err) => console.log("Mongodb connection error: ", err));

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email }).then((user) => {
    if (!user) {
      return res.json("No record existed");
    }

    if (user.password !== password) {
      return res.json("Password is incorrect");
    }

    res.json("success");
    
  })
});

app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});
app.listen(port, () => {
  console.log(`Server is running ${port}`);
});
