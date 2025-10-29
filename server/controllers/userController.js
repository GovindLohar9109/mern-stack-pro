
import userModel from "../utils/models/userModel.js";

export default class UserController {

    static async getUsers(req, res) {
        try {
            const resp = await userModel.find();
            console.log(resp);
            res.send({ status: true, users: resp });
        }
        catch (err) {
            res.send({ status: false, msg: err });
        }
        return;

    }

    static async addUser(req, res) {
        try {
            const user = req.body; // e.g. { user_name: "Govind" }

            // ✅ Must await .save()
             const savedUser = await new userModel(user).save();
           
            
            res.send({
                status: true,
                msg: "User added successfully!",
                user: savedUser,
            });
        } catch (err) {
            console.error("Error adding user:", err);
            res.send({ status: false, msg: "Error adding user." });
        }
    }

    static async removeUser(req, res) {
        var user_id = req.params.user_id;
        try {
            await userModel.delete({ id: user_id });
            res.send({ status: true, msg: "user removed..." });
        }
        catch (err) {
            res.send({ status: false, msg: "err" + err });
        }



    }
    static updateUser(req, res) {

        res.send("Successfully Updated User");
    }





}