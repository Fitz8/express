require("./db/connection"); //runs connection immediately
const express = require("express");
const cors = require("cors");
const userRouter = require("./user/routes");
const app = express();

app.use(bodyParser.json({
    limit: '50mb'
}));
  
app.use(bodyParser.urlencoded({
    limit: '50mb',
    parameterLimit: 100000,
    extended: true 
}));

//add routes and controllers to app before listen runs
app.use(express.json()); //Tell entire sever that it will always receive json and to always send back json
app.use(cors());
app.use(userRouter);

app.get("/health", (req, res) => {
    res.status(200).send({ message: "API is working" });
});

app.listen(5001, () => {
    console.log("Listening on port 5001");
})