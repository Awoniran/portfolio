"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const homes_1 = require("../controllers/homes");
const router = (0, express_1.Router)();
router.route('/').get(homes_1.HomeController);
exports.default = router;
