import { connection } from "../utils.js"

export class Repository {
    static login = async ({ username }: { username: string }) => {
        const [rows] = await connection.execute('select bin_to_uuid(id) as id, username, passwd from users where username = ?;', [username])
        const user = (rows as any)[0]
        return user || null
    }

    static register = async ({ username, password }: { username: string, password: string }) => {
        await connection.execute('call sp_register(?, ?)', [username, password])
    }

    static createConcept = async ({ text, title, user_id }: { text: string, title: string, user_id: string }) => {
        await connection.execute('call sp_create_concept (?, ?, ?)', [text, title, user_id])
    }

    static deleteConcept = async (id: string) => {
        await connection.execute('delete from concepts where id = uuid_to_bin(?)', [id])
    }

    static findConcepsByUser = async (userId: string) => {
        const [rows] = await connection.execute('select * from view_concepts where user_id = ?', [userId])
        const concepts = (rows as any)
        return concepts || []
    }

    static findConceptsByTitle = async (title: string) => {
        const [rows] = await connection.execute('select * from view_concepts where title like(?)', [`%${title}%`])
        const concepts = rows as any
        return concepts || []
    }
}