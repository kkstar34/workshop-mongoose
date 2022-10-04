
import Database from './db/Database.js';
import { EmailModel } from './db/models/emails.js';

const db = new Database();


// first method

const email = EmailModel.create({
    email : "kouyatekarim02@gmail.com"
}).then(() => {
    console.log("Email created")
})
.catch(err => {
    console.log(err.message)
})


// second method
// const emailNew = new EmailModel({
//     email : "kouyatekarim02@gmail.com"
// });

// emailNew.save()
// .then(() => {
//     console.log("Email created")
// })
// .catch(err => {
//     console.log(err.message)
// })









// email.save()
// .then((e) => {
//     console.log(e)
// })
// .catch((err) => {
//     console.log(err.message)
// })