import product from '../../models/productModel.js'

const postProduct = async (req, res) => {
    try {
        const productData = req.body;
        const [result] = await product.postByProduct(productData.name, productData.quant, productData.price)
        if(result.affectedRows === 1) {
            res.json({
                success: "Produto inserido com Sucesso!",
                Product: {
                    id: result.insertId,
                    ...productData
                   // name: userData.name,
                   // email: userData.email,
                   // pass: userData.pass
                }
            })
        } else {
            res.status(404).json({
                error: `produto id: ${productDataData.id} não Encontrado!`
            });
        };
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Erro no servidor"
        })
    }
};
 
export default postProduct;