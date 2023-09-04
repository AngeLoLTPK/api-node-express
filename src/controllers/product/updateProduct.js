import product from '../../models/productModel.js'

const updateProduct = async (req, res) => {
    try {
        const productData = req.body;
        const [result] = await product.updateByProduct(productData.name, productData.quant, productData.price, productData.id)

        if(result.affectedRows === 1) {
            res.json({
                success: "Dados do produto alterados com Sucesso!",
                user: {
                    ...productData
                   // name: productData.name,
                   // email: productData.email,
                   // pass: productData.pass
                }
            })
        } else {
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

export default updateProduct;