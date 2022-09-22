import app from "./src/app.js";

const port= 3030;
const PORT = process.env.PORT || 3030;

app.listen(PORT, () => console.log(`Servidor na porta ${port} iniciado com sucesso!`));