const express = require("express");
const { registerUser, loginUser, logout, forgotPassword, resetPassword, getUserDetails, updatePassword, updateProfile, getAllUser, getSingleUser, updateUserRole, deleteProfile, deleteUser } = require("../controller/userController");
const { isAuthentication, authorizedRole} = require("../middleware/auth");
const router = express.Router();

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").get(logout)
router.route("/password/forgot").post(forgotPassword)
router.route("/password/reset/:token").put(resetPassword)
router.route("/me").get(isAuthentication, getUserDetails)
router.route("/password/update").put(isAuthentication, updatePassword)
router.route("/me/update").put(isAuthentication, updateProfile)

router
.route("/admin/users")
.get(isAuthentication, authorizedRole("admin"), getAllUser)

router
.route("/admin/user/:id")
.get(isAuthentication, authorizedRole("admin"), getSingleUser)
.put(isAuthentication, authorizedRole("admin"), updateUserRole)
.delete(isAuthentication, authorizedRole("admin"), deleteUser)

module.exports = router;