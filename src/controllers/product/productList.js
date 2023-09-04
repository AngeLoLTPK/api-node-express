import produtcs from '../../models/productModel.js'

const listProducts = async (req, res) => {
    try{
        const [rows] = await produtcs.getAll()
        if(rows.length === 0){
            res.status(404).json({
                error: `Nenhum produto encontrado!`
            })
        } else {
            res.json({
                success: "produto(s) Encontrado(s) com Sucesso!",
                users: rows
            })
        }
    } catch (error){
        console.log(error)
        res.status(500).json({
            error: "Erro no servidor!",
        })
    }
}

export default listProducts;