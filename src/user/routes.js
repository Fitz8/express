const { Router } = require("express");
const userRouter = Router();
const { createUser, findUser, updateUser, deleteUser } = require("./controllers");

userRouter.post("/user", createUser); //if /user runs on a post request, createuser
userRouter.get("/user", findUser);
userRouter.put("/user", updateUser);
userRouter.delete("/user", deleteUser);

module.exports = userRouter;