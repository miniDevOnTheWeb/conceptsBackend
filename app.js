import express from "express";
import cors from "cors";
import { router } from "./routes/routes.js";
import { errorHandler } from "./middlewares/midleware.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:4200", credentials: true }));
app.use('/api', router);
app.use(errorHandler);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//# sourceMappingURL=app.js.map