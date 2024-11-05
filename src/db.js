import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube2");

const db = mongoose.connection;

const handleOpen = () => console.log("Connect to DB");
const handleError = (error) => console.log("DB Error", error);

db.on("error", handleError);
// db.on("error", (error) => console.log("DB Error", error));
db.once("open", handleOpen);
