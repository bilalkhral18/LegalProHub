import express from"express"
const router = express.Router();
import upload from "../middlewares/multerConfig.js";
import authcontroller from"../controllers/authController.js";

router.post(
  "/signup",
  upload.fields([
    { name: "photo", maxCount: 1 },
    { name: "idFront", maxCount: 1 },
    { name: "idBack", maxCount: 1 },
    { name: "lawyerLicense", maxCount: 1 },
  ]),
  authcontroller.signup
);

router.post("/login", authcontroller.login);
router.get("/getclients", authcontroller.getUser);
router.get("/getlawyer", authcontroller.getLawyer);

export default router;
