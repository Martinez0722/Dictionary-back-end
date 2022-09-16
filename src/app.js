import express from "express"
import database from "./config/database.js"
import dotenv from "dotenv-safe"
import router from "./routes/router.js"
import authRouter from "./routes/authRouter.js"

dotenv.config()

database.on("open", () => console.log("Conexão feita com sucesso !"));
database.on("error", () => console.log("Conexão quebrada, houve um erro:"));

const app = express();
app.use(express.json())

//Caminho Raíz das Request
app.use('/auth', authRouter)
app.use('/teste', router)

export default app;