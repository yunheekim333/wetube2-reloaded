import express from "express";
import { see, edit, remove, logout } from "../controller/userController";

const userRouter = express.Router();

userRouter.get("/remove", remove);
userRouter.get("/:id", see);
userRouter.get("/edit", edit);

userRouter.get("/logout", logout);

export default userRouter;
