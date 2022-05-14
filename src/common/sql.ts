const mysql = require('mssql')

export const sqlconnect = (db) => {
    // console.log('ENVVV:', env)
    return mysql.createConnection({
        user: 'sa',
        password: 'passwordepxsql',
        server: '139.99.70.208', 
        database: db
    })
}