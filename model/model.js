import bcrypt from "bcrypt";
import { Repository } from "./repository.js";
import { BadRequestError, NotFoundError } from "../middlewares/ErrorClases.js";
export class AppModel {
    static login = async ({ username, password }) => {
        const user = await Repository.login({ username });
        if (!user)
            throw new NotFoundError("Usuario no encontrado");
        console.log(user);
        const match = await bcrypt.compare(password, user.passwd);
        if (!match)
            throw new BadRequestError("Contraseña incorrecta");
        return { user };
    };
    static register = async ({ username, password }) => {
        const hash = await bcrypt.hash(password, 10);
        await Repository.register({ username, password: hash });
        return { message: "Usuario registrado correctamente" };
    };
    static createConcept = async ({ text, title, user_id }) => {
        await Repository.createConcept({ text, title, user_id });
        return { message: "Concepto creado correctamente" };
    };
    static deleteConcept = async ({ id }) => {
        await Repository.deleteConcept(id);
        return { message: "Concepto eliminado correctamente" };
    };
    static findConceptsByUser = async ({ user_id }) => {
        const concepts = await Repository.findConcepsByUser(user_id);
        return { concepts };
    };
    static findConceptsByTitle = async ({ title }) => {
        const concepts = await Repository.findConceptsByTitle(title);
        return { concepts };
    };
}
//# sourceMappingURL=model.js.map