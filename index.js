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
            pass:'Losicek0505'
        }
    });

    let mailOptions = {
        from:data.email,
        to: 'ondra.losi@gmail.com',
        subject:`Zprava od ${data.name}`,
        html:`
            <h2> Informace </h2>

            <li> Jmeno: ${data.name}</li>
            <li> Email: ${data.email} </li>
            <li> Zprava: ${data.message} </li>


        `
    };

    smtpTransport.sendMail(mailOptions, (error, response) => {
        if(error)
        {
            res.send(error)
        }
        else
        {
            res.send('Success')
        }
    })

    smtpTransport.close();
})



const PORT = process.env.PORT||3001;

app.listen(PORT, () => {
    console.log(`Server se nacita na portu ${PORT}`);
})