var express=require('express')
var nodemailer = require('nodemailer')
var router=express.Router()

let path=require('path')

router.use(express.urlencoded())


router.get('/',(req,res,next)=>{
    res.render('/home/mk/Desktop/Learning/Node/academind/views/home.html');
});

router.post('/',(req,res,next)=>{
    // console.log(req.body);
    user_email=req.body.email;
    // console.log(user_email);

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'saurabhtribhuvan49@gmail.com',
            pass: 'jmlabamlicuppuvd'
        }
    
    });

    var mailOptions = {
        from: 'saurabhtribhuvan49@gmaill.com',
        to: user_email,
        subject: 'Node Mailer',
        html: `Hello ${req.body.first_name} ${req.body.last_name}, Welcome to MK`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log("Email sent" + info.response)
        }
    });

});

module.exports=router






