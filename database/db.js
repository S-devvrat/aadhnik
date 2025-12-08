import mysql from 'mysql2/promise'
let connection;
export const CreateConnection = async ()=>{
    if(!connection){
        connection = await mysql.CreateConnection({
            host: process.env.DATABASE_HOST,
            user: process.env.DATABSE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
        })
    }
    return connection;
}