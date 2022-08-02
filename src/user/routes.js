const { Router } = require("express");
const userRouter = Router();
const { createUser, findUser, updateUser, deleteUser, login } = require("./controllers");
const { hashPass, comparePass } = require("../middleware");

userRouter.post("/user", hashPass, createUser); //if /user runs on a post request, createuser
userRouter.post("/user/:login", comparePass, login);
userRouter.get("/user", findUser);
userRouter.put("/user", updateUser);
userRouter.delete("/user", deleteUser);

module.exports = userRouter;