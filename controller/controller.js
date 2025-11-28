import { AppModel } from "../model/model.js";
import jwt from 'jsonwebtoken';
import { BadRequestError } from "../middlewares/ErrorClases.js";
export class AppController {
    static login = async (req, res, next) => {
        const { username, password } = req.body;
        try {
            const user = await AppModel.login({ username, password });
            const token = jwt.sign(user, process.env.TOKEN_PRIVATE_KEY, { expiresIn: '1h' });
            return res.status(200).json({ user: user.user, token });
        }
        catch (error) {
            next(error);
        }
    };
    static register = async (req, res, next) => {
        const { username, password } = req.body;
        try {
            const user = await AppModel.register({ username, password });
            return res.status(201).json({ message: user.message });
        }
        catch (error) {
            next(error);
        }
    };
    static createConcept = async (req, res, next) => {
        const { text, title, userId } = req.body;
        try {
            const concept = await AppModel.createConcept({ text, title, user_id: userId });
            return res.status(201).json({ message: concept.message });
        }
        catch (error) {
            next(error);
        }
    };
    static deleteConcept = async (req, res, next) => {
        const { id } = req.params;
        if (!id)
            throw new BadRequestError("Id no proporcionado");
        try {
            const concept = await AppModel.deleteConcept({ id });
            return res.status(200).json({ message: concept.message });
        }
        catch (error) {
            next(error);
        }
    };
    static findConceptsByUser = async (req, res, next) => {
        const { userId } = req.params;
        if (!userId)
            throw new BadRequestError("Id no proporcionado");
        try {
            const concepts = await AppModel.findConceptsByUser({ user_id: userId });
            return res.status(200).json({ concepts: concepts.concepts });
        }
        catch (error) {
            next(error);
        }
    };
    static findConceptsByTitle = async (req, res, next) => {
        const { title } = req.params;
        if (!title)
            throw new BadRequestError("Titulo no proporcionado");
        try {
            const concepts = await AppModel.findConceptsByTitle({ title });
            return res.status(200).json({ concepts: concepts.concepts });
        }
        catch (error) {
            next(error);
        }
    };
    static me = async (req, res, next) => {
        try {
            const user = req.user;
            console.log(user);
            return res.status(200).json({ user: user.user });
        }
        catch (error) {
            next(error);
        }
    };
}
//# sourceMappingURL=controller.js.map