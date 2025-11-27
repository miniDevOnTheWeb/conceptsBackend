import Router from "express";
import { AppController } from "../controller/controller.js";
export const router = Router();
router.get("/", (req, res) => {
    res.send('JAJAJA, BIENVENIDO A LA API DE CONCEPTOS');
});
router.post('/login', AppController.login);
router.post('/register', AppController.register);
router.post('/createConcept', AppController.createConcept);
router.delete('/deleteConcept/:id', AppController.deleteConcept);
router.get('/findConceptsByTitle/:title', AppController.findConceptsByTitle);
router.get('/findConceptsByUser/:userId', AppController.findConceptsByUser);
//# sourceMappingURL=routes.js.map