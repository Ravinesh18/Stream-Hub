import { Router} from "express";
import { loginUser , logoutUser, registerUser , changeCurrentPassword , updateAccountDetail ,
     updateUserCoverImage , updateUserAvatar , getCurrentUser , getUserChannelProfile , getWatchHistory 
 } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        },
        {
            name:"coverImage",
            maxCount:1
        }
    ]),
    registerUser
)

router.route("/login").post(loginUser)
router.route("/logout").post( verifyJWT , logoutUser)
router.route("/change-password").post(verifyJWT , changeCurrentPassword)
router.route("/updat-account-details").post(verifyJWT , updateAccountDetail)
router.route("/current-user").get(verifyJWT , getCurrentUser)
router.route("/refresh-token").post(verifyJWT)

router.route("/avatar").patch(verifyJWT , upload.single("avatar") , updateUserAvatar)
router.route("/cover_image").patch(verifyJWT , upload.single("coverImage") , updateUserCoverImage)

router.route("/c/:username").get(verifyJWT , getUserChannelProfile)
router.route("history").get(verifyJWT , getWatchHistory)
export default router