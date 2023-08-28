import mysql from 'mysql2/promise';

import {  DB_HOST, DB_USER, DB_PASS, DB_NAME } from '../config.js'

const pool = await mysql.createPool({
   host: DB_HOST,
   user:  DB_USER,
   passoword: DB_PASS,
   database: DB_NAME,
   waitForConnection: true,
   connectionLimit: 10,
   queueLimit: 0
});

export default pool;