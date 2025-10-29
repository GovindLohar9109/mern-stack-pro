import express from "express";
import UserController from "../controllers/userController.js";
const router=express.Router();


router.get("/get-users",UserController.getUsers);
router.post("/add-user",UserController.addUser);
router.put("/update-user",UserController.updateUser);
router.delete("/delete-user/:user_id",UserController.removeUser);


export default router;