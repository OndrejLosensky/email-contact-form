const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors()); 


app.get('/', () => {
    resizeBy.send("welcome to my forma")
})

app.post('/api/forma', (req, res) => {

    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service: 'Gmail', 
        port: 465,
        auth: {
            user:'ondra.losi@gmail.com',
            pass:'nyyy ldrl rkbe spjm'
        }
    });

    let mailOptions = {
        from:data.email,
        to: 'ondra.losi@gmail.com',
        subject:`Zprava od ${data.name}`,
        html:`
            <h2> Příchozí e-mail z kontaktního formuláře </h2>

            <h4> Jméno: </h4>
            <p> ${data.name}</p>
            <h4> E-mail: </h4>
            <p> ${data.email} </p>
            <h4> Zpráva pro mě:</h4>
            <p> ${data.message} </p>



        `
    };

    smtpTransport.sendMail(mailOptions, (error, response) => {
        if(error)
        {
            res.send(error)
        }
        else
        {
            res.send('Úspěšně odesláno')
        }
    })

    smtpTransport.close();
})



const PORT = process.env.PORT||3001;

app.listen(PORT, () => {
    console.log(`Server se nacetl na portu ${PORT}`);
})