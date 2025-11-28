import Router from "express"
import { AppController } from "../controller/controller.js"
import { verifyToken } from "../middlewares/midleware.js"
export const router = Router()

router.get("/", (req, res) => {
    res.send('JAJAJA, BIENVENIDO A LA API DE CONCEPTOS')
})

router.post('/login', AppController.login)
router.post('/register', AppController.register)
router.post('/createConcept', verifyToken, AppController.createConcept)
router.delete('/deleteConcept/:id', verifyToken, AppController.deleteConcept)
router.get('/findConceptsByTitle/:title', verifyToken, AppController.findConceptsByTitle)
router.get('/findConceptsByUser/:userId', verifyToken, AppController.findConceptsByUser)
router.get('/me', verifyToken, AppController.me)