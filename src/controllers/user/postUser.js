import user from '../../models/userModel.js'

const postUser = async (req, res) => {
    const dados = await user.postByUser(req.body)

    res.json({ success: 'User created' });
};
 
export default postUser;