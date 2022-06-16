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
// console.log(process.env.GMAIL_USER)
class Email {
    constructor(reqBody) {
        this.reqBody = reqBody;
        // this.name=requestBody.name;
        // this.subject=requestBody.subject;
        // this.message=requestBody.message;
        // this.from=requestBody.email;
    }
    static newTransport() {
        nodemailer_1.default.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS
            },
        });
        mailOptions: {
            // from:this.requestBody.name,
            // to:process.env.GMAIL_USER,
            // text:this.message
        }
    }
    send() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.default = Email;
// class Email {
//     constructor(user, url) {
//        this.to = user.email;
//        this.firstName = user.names.first_name;
//        this.url = url;
//        this.from = process.env.EMAIL_FROM;
//     }
//     newTransport() {
//        return nodemailer.createTransport({
//           service: 'gmail',
//           auth: {
//              user: process.env.EMAIL_USERNAME,
//              pass: process.env.EMAIL_PASSWORD,
//           },
//        });
//     }
//     async send(template, subject) {
//        const html = pug.renderFile(
//           `${__dirname}/templates/emails/${template}.pug`,
//           {
//              firstName: this.firstName,
//              url: this.url,
//              subject,
//           }
//        );
//        const mailOptions = {
//           from: this.from,
//           to: this.to,
//           subject,
//           html,
//        };
//        await this.newTransport().sendMail(mailOptions);
//     }
//     async sendWelcome() {
//        await this.send('welcome', 'welcome to First-Loop');
//     }
//     async sendPasswordReset() {
//        await this.send(
//           'passwordReset',
//           'your password reset token (valid for 10 minutes)'
//        );
//     }
//  }
