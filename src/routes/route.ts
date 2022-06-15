import { Router ,Request,Response, NextFunction} from "express";
import { HomeController } from "../controllers/homes";
const router=Router()
router.route('/').get(HomeController)

export default router