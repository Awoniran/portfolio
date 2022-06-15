"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpErrorHandler = exports.HomeController = void 0;
const resonse_1 = __importDefault(require("./resonse"));
const HomeController = (req, res) => {
    (0, resonse_1.default)(res, 200, `Hello, I'm Myke Awoniran`);
};
exports.HomeController = HomeController;
const HttpErrorHandler = (err, req, res) => {
    (0, resonse_1.default)(res, 500, err.message);
};
exports.HttpErrorHandler = HttpErrorHandler;
