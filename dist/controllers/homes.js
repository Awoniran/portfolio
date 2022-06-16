"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const HttpSendMail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, email_1.default)(req.body);
        (0, response_1.default)(res, 200, 'email sent successfully');
    }
    catch (err) {
        return (0, response_1.default)(res, 500, 'check your internet connection and try again');
    }
});
exports.HttpSendMail = HttpSendMail;
