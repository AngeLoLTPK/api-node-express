import pool from '../database/db.js';

const getById = async(id) => {
    return await pool.query("Select name, email, photo from users where id = ?", [id]);
};

const getAll = async () => {
    return await pool.query("SELECT * FROM users")
}


const postByUser = async(name, email, pass, photo) => {
    return await pool.query("insert into users (name, email, pass, photo) values (?, ?, ?, ?);", [name, email, pass, photo]);
};

const updateByUser = async (user) => {
    const {id, name, email, photo} = user
    return await pool.query("UPDATE users SET name = ?, email = ?, photo = ? WHERE id = ?;", [name, email, photo, id])
}

const deleteByUser = async(id) => {
    return await pool.query("delete from users where id = ?", [id]);
}

export default {getById, postByUser, updateByUser, deleteByUser, getAll};