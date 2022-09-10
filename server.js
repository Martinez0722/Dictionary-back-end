import app from "./src/app.js";

const port= 3000;
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Servidor na porta ${port} iniciado com sucesso!`));