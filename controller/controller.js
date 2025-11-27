import { AppModel } from "../model/model.js";
export class AppController {
    static login = async (req, res, next) => {
        const { username, password } = req.body;
        try {
            const user = await AppModel.login({ username, password });
            return res.status(200).json({ user });
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
        const { id } = req.body;
        try {
            const concept = await AppModel.deleteConcept(id);
            return res.status(200).json({ message: concept.message });
        }
        catch (error) {
            next(error);
        }
    };
    static findConceptsByUser = async (req, res, next) => {
        const { userId } = req.body;
        try {
            const concepts = await AppModel.findConceptsByUser(userId);
            return res.status(200).json({ concepts });
        }
        catch (error) {
            next(error);
        }
    };
    static findConceptsByTitle = async (req, res, next) => {
        const { title } = req.body;
        try {
            const concepts = await AppModel.findConceptsByTitle(title);
            return res.status(200).json({ concepts });
        }
        catch (error) {
            next(error);
        }
    };
}
//# sourceMappingURL=controller.js.map