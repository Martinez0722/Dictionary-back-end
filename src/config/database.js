import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/dictionary-Database");


let database = mongoose.connection

export default database;