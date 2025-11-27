import mysql from "mysql2/promise";
export const connection = await mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "dieguix",
    password: "dieguix03092005",
    database: "guarda_conceptos_db",
});
//# sourceMappingURL=utils.js.map