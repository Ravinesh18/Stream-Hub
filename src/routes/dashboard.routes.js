import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
    getChannelStats ,
    getChannnelVideos
} from "../controllers/dashboard.controller.js"

const router  = Router();
router.use(verifyJWT);

router.route("/videos").get(getChannnelVideos);

router.route("/stats").get(getChannelStats)

export default router;