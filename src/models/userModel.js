import pool from '../database/db.js';

const getById = async(id) => {
    return await pool.query("Select name, email from users where id = ?", [id]);
};

const postByUser = async(name, email, pass) => {
    return await pool.query("insert into users (name, email, pass) values (?, ?, ?);", [name, email, pass]);
};

export default {getById, postByUser};