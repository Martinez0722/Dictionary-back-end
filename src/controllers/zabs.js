// static produtoGetAll = async(req, res) => {
//     Produto.find(function (err, Produtos) {
//         if(err){
//             res.status(500).send({message: err.message})
//         }
//             res.status(200).send(Produtos)
//     })
// }

// static produtoRegister = async(req, res) => {

//     const produto = await Produto.create(req.body);

//     return res.status(200).send({produto});
