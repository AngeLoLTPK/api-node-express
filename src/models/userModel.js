import pool from '../database/db.js';

const getById = async(id) => {
    return await pool.query("Select name, email from users where id = ?", [id]);
};

const getAll = async () => {
    return await pool.query("SELECT * FROM users")
}


const postByUser = async(name, email, pass) => {
    return await pool.query("insert into users (name, email, pass) values (?, ?, ?);", [name, email, pass]);
};

const updateByUser = async(name, email, pass, id) => {
    return await pool.query("update users set name=?, email=?, pass=? where id = ?", [name, email, pass, id]);
}

const deleteByUser = async(id) => {
    return await pool.query("delete from users where id = ?", [id]);
}

export default {getById, postByUser, updateByUser, deleteByUser, getAll};