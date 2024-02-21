import express from "express";
import { authentificateUser, authorizeAdmin } from "../middlewares/auth.js";
import { addUser, loginUser, logoutUser, getAllUsers, getUserProfile,
        updateUserProfile, deleteUserById, getUserById, updateUserById
} from "../controllers/userController.js";

const router = express.Router();

router.route("/auth").post(addUser)
.get(authentificateUser, authorizeAdmin, getAllUsers);

router.post("/login", loginUser);
router.get("/logout", logoutUser);

router.route("/profile")
.get(authentificateUser, getUserProfile)
.put(authentificateUser, updateUserProfile);

//admin
router.route("/:id")
.delete(authentificateUser, authorizeAdmin, deleteUserById)
.get(authentificateUser, authorizeAdmin, getUserById)
.put(authentificateUser, authorizeAdmin, updateUserById)

export default router;  