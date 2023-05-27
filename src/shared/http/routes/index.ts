import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { userRoutes } from "./users.routes";
import { authenticationRoutes } from "./authenticate.routes";
import { authGuard } from "../middlewares/authGuard";
import errorInterceptor from "../middlewares/errorInterceptor";
import specificationsRoutes from "./specifications.routes";
import { carRoutes } from "./car.routes";

const router = Router();

router.use("", authenticationRoutes);
router.use("/users", userRoutes);
router.use("/cars", carRoutes);
router.use(authGuard);
router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);
router.use(errorInterceptor);

export { router };
