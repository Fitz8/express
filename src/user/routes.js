const { Router } = require("express");
const userRouter = Router();
const { createUser, findUser, updateUser, deleteUser, login} = require("./controllers");
const { hashPass, comparePass, tokenCheck } = require("../middleware");

userRouter.post("/user/", hashPass, createUser); //if /user runs on a post request, createuser
userRouter.post("/login/", comparePass, login);
userRouter.get("/user", findUser);
userRouter.put("/user", updateUser);
userRouter.delete("/user", deleteUser);
userRouter.get("/login/", tokenCheck, login);


//generate a token on create user and login, token should contain unique info from db entry
module.exports = userRouter;