require('dotenv').config()

const mysql = require("mysql2/promise")

const conectar = async () =>{
    const urlPublic = process.env.URL_CONNECTION


    const connection = await mysql.createConnection(urlPublic)

    console.log('connected to database')
    return connection
}




module.exports = conectar;