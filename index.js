const express = require('express');
const app = express();
const {all_users,userbyid, postuser,updateuser,deleteuser} = require('./quries.js')
const bodyParser = require("body-parser");
app.use(express.json());


app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });


app.get("/desc",all_users)
app.get("/user/:id",userbyid)
app.post('/postUser',postuser)
app.put('/updateuser/:id',updateuser)
app.delete('/deleteuser/:id',deleteuser)
  // set port, listen for requests
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });