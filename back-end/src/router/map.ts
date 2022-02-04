import express from "express";

import { getMap } from "../controller/map";
import { getEachPlace } from "../controller/getPlace";

const router = express.Router();

router.get("/", getMap);
router.get("/:id", getEachPlace);

export default router;
