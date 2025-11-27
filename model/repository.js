import { connection } from "../utils.js";
export class Repository {
    static login = async ({ username }) => {
        const [rows] = await connection.execute('select bin_to_uuid(id) as id, username, passwd from users where username = ?;', [username]);
        const user = rows[0];
        return user || null;
    };
    static register = async ({ username, password }) => {
        await connection.execute('call sp_register(?, ?)', [username, password]);
    };
    static createConcept = async ({ text, title, user_id }) => {
        await connection.execute('call sp_create_concept (?, ?, ?)', [text, title, user_id]);
    };
    static deleteConcept = async (id) => {
        await connection.execute('delete from concepts where id = uuid_to_bin(?)', [id]);
    };
    static findConcepsByUser = async (userId) => {
        const [rows] = await connection.execute('select * from view_concepts where user_id = ?', [userId]);
        const concepts = rows;
        return concepts || [];
    };
    static findConceptsByTitle = async (title) => {
        const [rows] = await connection.execute('select * from view_concepts where title like(?)', [`%${title}%`]);
        const concepts = rows;
        return concepts || [];
    };
}
//# sourceMappingURL=repository.js.map