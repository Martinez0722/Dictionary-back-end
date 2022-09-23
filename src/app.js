import express from "express"
import database from "./config/database.js"
import dotenv from "dotenv-safe"
import router from "./routes/router.js"
import authRouter from "./routes/authRouter.js"
import download from "./downloadScript.js"
import fileOpener from "../txtReader.js"
import cors from "cors";


dotenv.config()

database.on("open", () => console.log("Conexão feita com sucesso !"));
database.on("error", () => console.log("Conexão quebrada, houve um erro:"));

const app = express();
app.use(express.json())

//Caminho Raíz das Request
app.use(cors());
app.use('/auth', authRouter);
app.use('/', router);
app.use('/',download);


export default app;