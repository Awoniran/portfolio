"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpSendMail = exports.HttpErrorHandler = exports.HomeController = void 0;
const response_1 = __importDefault(require("./response"));
const email_1 = __importDefault(require("./email"));
const HomeController = (req, res) => {
    (0, response_1.default)(res, 200, `Hello, I'm Myke Awoniran`);
};
exports.HomeController = HomeController;
const HttpErrorHandler = (err, req, res) => {
    (0, response_1.default)(res, 500, err.message);
};
exports.HttpErrorHandler = HttpErrorHandler;
const HttpSendMail = (req, res) => {
    try {
        new email_1.default(req.body).send();
    }
    catch (err) {
        return (0, response_1.default)(res, 500, 'there is an error sending the email');
    }
};
exports.HttpSendMail = HttpSendMail;
