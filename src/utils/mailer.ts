export const mailer = async (subject, email, message) => {
  var aws = require("aws-sdk");
  await aws.config.update({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
  });
  var ses = new aws.SES();

  const params = {
    Destination: {
      ToAddresses: [`<${email}>`],
    },
    Message: {
      Body: {
        Html: {
          // HTML Format of the email
          Charset: "UTF-8",
          Data: `${message}`,
        },
        Text: {
          Charset: "UTF-8",
          Data: "FYI",
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
    },
    Source: `<${process.env.EMAIL}>`,
    ConfigurationSetName: process.env.SES_CONFIG,
  };
  return new Promise((resolve, reject) => {
    ses.sendEmail(params, function (err, data) {
      if (err) {
        resolve(data);
        console.log(`EMAIL ERROR:`, err, data);
        console.log(err, err.stack);
      } else {
        resolve(data);
        console.log(data);
      }
    });
  });
};

export const bulkMailer = async (subject, email, message) => {
  var aws = require("aws-sdk");
  await aws.config.update({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
  });
  var ses = new aws.SES();

  const params = {
    Destination: {
      ToAddresses: email,
    },
    Message: {
      Body: {
        Html: {
          // HTML Format of the email
          Charset: "UTF-8",
          Data: `${message}`,
        },
        Text: {
          Charset: "UTF-8",
          Data: "FYI",
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
    },
    Source: `<${process.env.EMAIL}>`,
    ConfigurationSetName: process.env.SES_CONFIG,
  };
  return new Promise((resolve, reject) => {
    ses.sendEmail(params, function (err, data) {
      if (err) {
        resolve(data);
        console.log(`EMAIL ERROR:`, err, data);
        console.log(err, err.stack);
      } else {
        resolve(data);
        console.log(data);
      }
    });
  });
  // await ses.sendEmail(params, function (err, data) {
  //   if (err) {
  //     console.log(`EMAIL ERROR:`, err, data);
  //     console.log(err, err.stack);
  //   } else {
  //     console.log(data);
  //   }
  // });
};

export const mailerattachment = async (subject, email, message, attachments) => {
  var aws = require("aws-sdk");
  const nodemailer = require("nodemailer");
  
  await aws.config.update({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
  });
  var ses = await nodemailer.createTransport({
    SES: new aws.SES()
  });;

  const params = {
      from: process.env.EMAIL,
      to: "carlosanpedro@keepwell.clinic",
      subject: "Hello",                // Subject line
      text: "sdadsa",                      // plaintext version
      html: '<div></div>', // html version
      attachments: [{
          filename: "usefulData.csv",
          content: attachments
      }]
    // Destination: {
    //   ToAddresses: [`<${email}>`],
    // },
    // Message: {
    //   Body: {
    //     Html: {
    //       // HTML Format of the email
    //       Charset: "UTF-8",
    //       Data: `${message}`,
    //     },
    //     Text: {
    //       Charset: "UTF-8",
    //       Data: "FYI",
    //     },
    //   },
    //   Subject: {
    //     Charset: "UTF-8",
    //     Data: subject,
    //   },
    //   attachments: [{
    //     filename: "usefulData.csv",
    //     content: usefulData
    //   }]
    // },
    // Source: `<${process.env.EMAIL}>`,
    // ConfigurationSetName: process.env.SES_CONFIG,
  };
  ses.sendRawEmail(params, function (err, data) {
    if (err) {
      console.log(`EMAIL ERROR:`, err, data);
      console.log(err, err.stack);
    } else {
      console.log(data);
    }
  });
};