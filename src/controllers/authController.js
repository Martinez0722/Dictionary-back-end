import User from "../models/User.js"
import bcrypt from "bcryptjs"

class AuthController{
   
    static cadastrarUsuario = async (req, res) =>{
        const { email } = req.body;

        const possivelUsuario = await User.findOne({ email })
        if(possivelUsuario){
          return  res.status(400).send({error: "Ususário já cadastrado !"})
        }

        const user = await User.create(req.body)
        user.senha = undefined;
        return res.status(200).send({user})
    }

    static login = async (req, res) =>{
        const { email, senha } = req.body;

        const user = await User.findOne({email}).select("+senha");

        if(!user)
            return res.status(400).send({error: "Usuário não encontrado"})
        
        const validacao = await bcrypt.compare(senha, user.senha)
        if(!validacao){
            return res.status(400).send({error: "Credenciais incorretas !"})
        }

        

        return res.send()

    }
}

export default AuthController