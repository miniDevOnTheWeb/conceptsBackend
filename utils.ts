import mysql from "mysql2/promise"

export const connection = await mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "usuario_concepts",
    password: "usuario_concepts_958",
    database: "concepts_db",
})