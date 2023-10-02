import user from '../../models/userModel.js'

const updateUser = async (req, res) => {
    try {
        const userData = req.body;
        const [result] = await user.updateByUser(userData.name, userData.email, userData.pass, userData.photo, userData.id)

        if(result.affectedRows === 1) {
            res.json({
                success: "Dados alterados com Sucesso!",
                user: {
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

export default updateUser;