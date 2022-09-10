import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const UserSchema = new mongoose.Schema(
    {
        usuario:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            unique: true,
            required: true,
            lowercase: true
        },
        senha:{
            type: String,
            required: true,
            select: false
        },
    }
)

UserSchema.pre("save", async function (next) {
    const hash = await bcrypt.hash(this.senha, 10)
    this.senha = hash;
    next();
})

const User = mongoose.model('User', UserSchema);

export default User;