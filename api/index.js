const express = require("express");
const app = express();
const PORT = 3000;

const userRoute = require("./routes/user.rest");
const loginRoute = require("./routes/login.rest");

const authenticateUser = require("./middlewares/authenticateUser");

app.use(express.json());

app.use( "/user", userRoute);
app.use( "/login", loginRoute);


module.exports.start = function () { 
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})};