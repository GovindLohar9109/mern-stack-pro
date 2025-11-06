import express from "express";
import UserController from "../controllers/userController.js";
const router=express.Router();


router.get("/get-users",UserController.getUsers);
router.post("/add-user",UserController.addUser);



export default router;