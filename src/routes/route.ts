import { Router} from "express";
import { HomeController } from "../controllers/homes";
const router=Router()

router.route('/').get(HomeController)
router.post('/send')

export default router