import { Router} from "express";
import { HomeController,HttpSendMail } from "../controllers/homes";
const router=Router()

router.route('/').get(HomeController)
router.post('/send',HttpSendMail)

export default router