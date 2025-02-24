const express = require("express");
const app = express();

port = 5000;
app.use(express.json());

app.get("/signup", (req, res) => {
  const { username, email, password, dob } = req.query;

  // Validating username
  if (username && !/^[a-zA-z]+$/.test(username)) {
    res.status(400).json({
      error: "Username should not be empty",
    });
  }
  // Validating Email

  if (email && !/^[.\s@][^\s@]+$ /.test(email)) {
    res.status(400).json({ error: "Email Cannot be Empty" });
  }
  // Validating Password

  if (password && !/^[a-zA-Z] [.\d] [^@$&!] {8,16} +$ /.test(password)) {
    res.status(400).json({
      error:
        "Password length should be greater than 8 and less than 16 characters",
    });
  }
  res.send("Signup Sucessful");
});

app.listen(port, (req, res) => {
  console.log(`This server running on localhost:${port}`);
});