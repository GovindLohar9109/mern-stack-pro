import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  user_name: { type: String }
});

const userModel = mongoose.model("user", userSchema);

export default userModel;
