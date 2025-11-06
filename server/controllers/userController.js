import pool from "../utils/connectDB.js";

export default class UserController {

    static async getUsers(req, res) {

        var query="SELECT * FROM users";
        try {
            const resp = await pool.query(query);
           
            res.send({ status: true, users: resp.rows });
        }
        catch (err) {
            res.send({ status: false, users: [] });
        }
        return;

    }

    static async addUser(req, res) {
        try {
            const user = req.body; // e.g. { user_name: "Govind" }

            // ✅ Must await .save()
             var query="INSERT INTO users VALUES($1)";
             await pool.query(query,[user]);
           
            
            res.send({
                status: true,
                msg: "User added successfully!",
               
            });
        } catch (err) {
            console.error("Error adding user:", err);
            res.send({ status: false, msg: "Error adding user." });
        }
    }

    
}