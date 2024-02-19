require("dotenv").config();
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const { client_Url, server_Url } = require("./url");

const generateToken = async (user) => {
    return jwt.sign(
        {
            name: user.name,
            email: user.email,
            _id: user?._id
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: "7days",
        }
    );
};

const sendVerificationCode = async (email, otp) => {
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "tonniakterbithi@gmail.com",
            pass: "tonniakterbithi@123",
        },
    });

    const mailOptions = {
        from: "tonniakterbithi@gmail.com",
        to: email,
        subject: "Email Verification",
        html: `

    <!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="x-apple-disable-message-reformatting" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>Email Template</title>
  <style type="text/css" rel="stylesheet" media="all">
    @import url('https://fonts.googleapis.com/css?family=Roboto');

    body {
      width: 100% !important;
      height: 100%;
      margin: 0;
      -webkit-text-size-adjust: none;
    }

    td {
      word-break: break-word;
    }

    body,
    td,
    th {
      font-family: 'Roboto', sans-serif;
    }
    p{
      font-weight:"bold"
    }
  </style>
</head>

<body
  style="background-image: url(https://i.postimg.cc/25sqFTKn/Email-Body.png) !important; background-repeat: no-repeat; background-size: cover; color: white;">

  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
      <td style="padding: 80px;" align="center">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
          <!-- Email Body -->
          <tr>
            <td style="text-decoration: none;" cellpadding="0" cellspacing="0">
              <table align="center" cellpadding="0" cellspacing="0" role="presentation">
                <!-- Body content -->
                <tr>
                  <td class="content-cell">
                    <div style="text-align: center;">
                      <a href="#">
                        <img src="https://i.postimg.cc/j5Tps2K7/logo-2.png" alt="logo">
                      </a>
                      <!-- Action -->
                      <table align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td align="center">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                              <tr>
                                <td align="center">
                                  <a href="#" target="_blank"
                                    style="font-size: 24px; font-weight: 600; color: white; text-decoration: none;">
                                    Verify Your Email Address
                                  </a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <table role="presentation">
                        <tr>
                          <td>
                            <p style="font-size: 22px; color: white; font-weight: 600;">
                              Please click the button below to verify your email address.
                            </p>
                            <p style="margin-top: 30px; margin-bottom: 50px; cursor:pointer;">
                           

                              <input type="hidden" name="email" value="user@example.com"> <!-- Replace with your data -->
                            
                              
                              <a href="${client_Url}/verifysuccess?email=${email}&otp=${otp}" target="_blank">
                              <button  style="text-decoration: none; background-color: #FF4700; border: 0; font-size: 16px; font-weight: 600; color: white;  padding: 10px 22px; border-radius: 20px; cursor: pointer; outline: none; border: none;">
                                VERIFY EMAIL ADDRESS
                              </button>
                              </a>
                         
                          </p>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td>
              <table align="center" width="570" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="font-size: 22px;" >
                    <p>
                      If you did not create an account, no further action is required.
                    </p>
                    <strong>
                      Regards,
                      <br>TalenGen Malaysia
                    </strong>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>

</html>

    `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            return true;
        }
    });

    // if (emailSent === true) {
    //   return true;
    // }
};
const sendVerificationCodeForReset = async (user,) => {
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "tonniakterbithi@gmail.com",
            pass: "tonniakterbithi@123",
        },
    });

    const mailOptions = {
        from: "tonniakterbithi@gmail.com",
        to: user?.email,
        subject: "Email Verification",
        html: `
 
    <!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml">
    
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="x-apple-disable-message-reformatting" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="color-scheme" content="light dark" />
      <meta name="supported-color-schemes" content="light dark" />
      <title>Email Template</title>
      <style type="text/css" rel="stylesheet" media="all">
        @import url('https://fonts.googleapis.com/css?family=Roboto');
    
        body {
          width: 100% !important;
          height: 100%;
          margin: 0;
          background-image: url(https://i.postimg.cc/25sqFTKn/Email-Body.png);
          -webkit-text-size-adjust: none;
          font-family: 'Roboto', sans-serif;
        }
    
        td {
          word-break: break-word;
        }
    
        body,
        td,
        th {
          font-family: 'Roboto', sans-serif;
        }
      </style>
    </head>
    
    <body
      style="background-image: url(https://i.postimg.cc/25sqFTKn/Email-Body.png) !important; background-repeat: no-repeat; background-size: cover; color: white;">
    
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td style="padding: 80px;" align="center">
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
              <!-- Email Body -->
              <tr>
                <td width="570" cellpadding="0" cellspacing="0">
                  <table align="center" width="570" cellpadding="0" cellspacing="0" role="presentation">
                    <!-- Body content -->
                    <tr>
                      <td class="content-cell">
    
                        <div style="text-align: center;">
    
                          <a href="#">
                            <img src="https://i.postimg.cc/j5Tps2K7/logo-2.png" alt="logo">
                          </a>
    
                          <!-- Action -->
                          <table align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                              <td align="center">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                  <tr>
                                    <td align="center">
                                 

                                    <a href="${client_Url}/reset?email=${user?.email}" target="_blank">
                                      <button style="text-decoration: none; background-color: #FF4700; border: 0; font-size: 16px; font-weight: 600; color: white; padding: 10px 22px; border-radius: 20px; cursor: pointer; outline: none; border: none;">
                                        Reset your password
                                      </button>
                                    </a>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
  
                          </table>
    
                          <table role="presentation">
                            <tr>
                              <td>
                                <p>
                                  We've receive a request to reset the password for TalenGen account associated with
                                  <b style="color: white;">${user?.email}</b>
                                </p>
                                <p>
                                  You can reset your password by clicking the link below:
                                </p>
                                <p style="display: none; margin-top: 30px; margin-bottom: 50px;">
                                  <a href="#"
                                    style="text-decoration: none; background-color: #FF4700; border: 0; font-size: 16px; font-weight: 600; color: white; padding: 10px 22px; border-radius: 20px;">
                                    RESET YOUR PASSWORD
                                  </a>
                                </p>
    
                              </td>
                            </tr>
                          </table>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table align="center" width="570" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td>
                        <p>
                          If you did not request a new password, please contact us immediately by replying to this email.
                        </p>
                        <strong>
                          Regards,
                          <br>TalenGen Malaysia
                        </strong>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    
    </html>

    `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            return true;
        }
    });

};

module.exports = {
    generateToken,
    sendVerificationCode,
    sendVerificationCodeForReset
};
