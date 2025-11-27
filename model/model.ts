import bcrypt from "bcrypt"
import { Repository } from "./repository.js";

export class AppModel {
    static login = async ({ username, password }: { username: string, password: string }) => {
        const user = await Repository.login({ username })
        if (!user) throw new Error("Usuario no encontrado")

        const match = await bcrypt.compare(password, user.password)
        if (!match) throw new Error("Contraseña incorrecta")

        return { user }
    }

    static register = async ({ username, password }: { username: string, password: string }) => {
        const hash = await bcrypt.hash(password, 10)
        await Repository.register({ username, password: hash })
        return { message: "Usuario registrado correctamente" }
    }

    static createConcept = async ({ text, title, user_id }: { text: string, title: string, user_id: string }) => {
        await Repository.createConcept({ text, title, user_id })
        return { message: "Concepto creado correctamente" }
    }

    static deleteConcept = async ({ id }: { id: string }) => {
        await Repository.deleteConcept(id)
        return { message: "Concepto eliminado correctamente" }
    }

    static findConceptsByUser = async ({ user_id }: { user_id: string }) => {
        const concepts = await Repository.findConcepsByUser(user_id)
        return { concepts }
    }

    static findConceptsByTitle = async ({ title }: { title: string }) => {
        const concepts = await Repository.findConceptsByTitle(title)
        return { concepts }
    }
}