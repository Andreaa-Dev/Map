"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const map_1 = require("../controller/map");
const getPlace_1 = require("../controller/getPlace");
const router = express_1.default.Router();
router.get("/", map_1.getMap);
router.get("/:id", getPlace_1.getEachPlace);
exports.default = router;
//# sourceMappingURL=map.js.map