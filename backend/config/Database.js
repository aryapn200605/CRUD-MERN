import { Sequelize } from "sequelize";

// membuat koneksi ke database
const db = new Sequelize("crud_mern", "root", "", {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;