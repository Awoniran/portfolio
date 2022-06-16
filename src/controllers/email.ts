import nodemailer from "nodemailer"

 export default async function Email(reqbody:any){
   const tranporter= nodemailer.createTransport({
                    service:'gmail',
                    auth:{
                        user:process.env.GMAIL_USER,
                        pass:process.env.GMAIL_PASS
                    },
})
const mailOptions={
    to:process.env.GMAIL_USER,
    from:reqbody.email,
    subject:`message from ${reqbody.email} : ${reqbody.subject}`,
    text:reqbody.message
}
const senderOptions={
    to:reqbody.email,
    from:process.env.GMAIL_USER,
    subject:'Thanks for Reaching out to <<Myke.Dev>>',
    text:'you mail has been received, I will get back to you soon'
}
await tranporter.sendMail(mailOptions);
await tranporter.sendMail(senderOptions);
}