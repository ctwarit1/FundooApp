
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

// These id's and secrets should come from .env file.
const CLIENT_ID = '781936544852-avkgq6m89vb6077n0snms2roiu0qe606.apps.googleusercontent.com';
const CLEINT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//044EVfi3YOXXPCgYIARAAGAQSNwF-L9IrGzBw9A5IideNtx0Xi5zp30_B_5GkBKbQ3cjvEZM5t7SJtvF0VXl5WVFc7GlWTJM9QH8';

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export async function sendingMail(email, token) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'ctwarit1@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: 'Twarit26 <ctwarit1@gmail.com>',
      to: '23rameshrana@gmail.com',
      subject: 'Hello Gmail API practice',
      text: 'Hello This is Twarit Chokniwal',
      html: `<h1>Hello,<br><br>Click on given link to reset your password!</h1><br><h1>Link:><a href="http://localhost:${process.env.APP_PORT}/${token}">click here</a></h1>`
    };

    const result = await transport.sendingMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}


