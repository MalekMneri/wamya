const nodemailer = require('nodemailer');



function sendEmail(message) {
    return new Promise((res, rej) => {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GOOGLE_USER,
                pass: process.env.GOOGLE_PASSWORD
            }
        })

        transporter.sendMail(message, function(err, info) {
            if (err) {
                rej(err)
            } else {
                res(info)
            }
        })
    })
}

exports.sendCustomerConfirmationEmail = function(Email,Username,id) {
    const message = {
        from: process.env.GOOGLE_USER,
        to: Email,
        subject: 'Wamya - Activate Account',
        html: `

        <h1>WAMYA</h1>
      <h3> Hello ${Username} </h3>
      <p>Thank you for registering into our Application. Much Appreciated! Just one last step is laying ahead of you...</p>
      <p>To activate your account please follow this link: <a target="_" href="${process.env.DOMAIN}/customers/ActivateCustomer/${id}">${process.env.DOMAIN}/activate </a></p>
      <p>Cheers</p>
      <p>Wamya Team</p>
    `
    }
    return sendEmail(message);
}


exports.sendCompanyConfirmationEmail = function(Email,Denomination,id) {
    const message = {
        from: process.env.GOOGLE_USER,
        to: Email,
        subject: 'Wamya - Activate Account',
        html: `

        <h1>WAMYA</h1>
      <h3> Hello ${Denomination} </h3>
      <p>Thank you for registering into our Application. Much Appreciated! Just one last step is laying ahead of you...</p>
      <p>To activate your account please follow this link: <a target="_" href="${process.env.DOMAIN}/entreprises/ActivateCompany/${id}">${process.env.DOMAIN}/activate </a></p>
      <p>Cheers</p>
      <p>Wamya Team</p>
    `
    }
    return sendEmail(message);
}