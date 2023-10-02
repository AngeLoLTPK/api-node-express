import user from '../../models/userModel.js'

const postUser = async (req, res) => {
    try {
        const userData = req.body;
        const [result] = await user.postByUser(userData.name, userData.email, userData.pass, userData.photo)
        if(result.affectedRows === 1) {
            res.json({
                success: "Usuário inserido com Sucesso!",
                user: {
                    id: result.insertId,
                    ...userData
                   // name: userData.name,
                   // email: userData.email,
                   // pass: userData.pass
                }
            })
        } else {
            res.status(404).json({
                error: `Usuário id: ${userData.id} não Encontrado!`
            });
        };
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Erro no servidor"
        })
    }
};
 
export default postUser;