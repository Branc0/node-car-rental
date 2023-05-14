import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { userRoutes } from "./users.routes";
import { authenticationRoutes } from "./authenticate.routes";
import { authGuard } from "../middlewares/authGuard";

const router = Router();

router.use("", authenticationRoutes);
router.use("/users", userRoutes);
router.use(authGuard);
router.use("/categories", categoriesRoutes);

export { router };
