require("./db/connection"); //runs connection immediately
const express = require("express");
const cors = require("cors");
const userRouter = require("./user/routes");
const app = express();

//add routes and controllers to app before listen runs
app.use(express.json()); //Tell entire sever that it will always receive json and to always send back json
app.use(cors());
app.use(userRouter);

app.listen(5001, () => {
    console.log("Listening on port 5001");
})