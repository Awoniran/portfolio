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
const nodemailer_1 = __importDefault(require("nodemailer"));
function Email(reqbody) {
    return __awaiter(this, void 0, void 0, function* () {
        const tranporter = nodemailer_1.default.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS
            },
        });
        const mailOptions = {
            to: process.env.GMAIL_USER,
            from: reqbody.email,
            subject: `message from ${reqbody.email} : ${reqbody.subject}`,
            text: reqbody.message
        };
        const senderOptions = {
            to: reqbody.email,
            from: process.env.GMAIL_USER,
            subject: 'Thanks for Reaching out to <<Myke.Dev>>',
            text: 'your mail has been received, I will get back to you soon'
        };
        yield tranporter.sendMail(mailOptions);
        yield tranporter.sendMail(senderOptions);
    });
}
exports.default = Email;
