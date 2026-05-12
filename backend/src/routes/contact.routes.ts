import express from "express";
import { sendContactEmail } from "../controller/contact.controller";

const router = express.Router();

router.post("/", sendContactEmail);

export default router;