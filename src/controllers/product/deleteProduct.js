import product from '../../models/productModel.js'

const deleteUser = async (req, res) => {
    try {
        const productData = req.body;
        const [result] = await product.deleteByProduct(productData.id)

        if(result.affectedRows === 1) {
            res.json({
                success: "produto deletado com sucesso!",
            })
        }   else {
            res.status(404).json({
                error: `produto id: ${productData.id} não Encontrado!`
            });
        };

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Erro no servidor"
        })
    }
};


export default deleteUser;