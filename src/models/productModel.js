import pool from '../database/db.js';

const getByproduct = async(id) => {
    return await pool.query("Select name, quant, price from products where id = ?", [id]);
};

const getAll = async () => {
    return await pool.query("SELECT * FROM products")
}


const postByProduct = async(name, quant, price) => {
    return await pool.query("insert into products (name, quant, price) values (?, ?, ?);", [name, quant, price]);
};

const updateByProduct = async(name, quant, price, id) => {
    return await pool.query("update products set name=?, quant=?, price=? where id = ?", [name, quant, price, id]);
}

const deleteByProduct = async(id) => {
    return await pool.query("delete from products where id = ?", [id]);
}

export default {getByproduct, postByProduct, updateByProduct, deleteByProduct, getAll};