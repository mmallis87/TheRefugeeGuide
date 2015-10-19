'use strict';

module.exports = {
  //db: 'mongodb://' + (process.env.DB_PORT_27017_TCP_ADDR || 'localhost') + '/mean-dev',
  db: 'mongodb://mmallis87:mongolab@ds037234.mongolab.com:37234/heroku_99cvt30k',
  debug: true,
  logging: {
    format: 'tiny'
  },
  //  aggregate: 'whatever that is not false, because boolean false value turns aggregation off', //false
  aggregate: false,
  mongoose: {
    debug: false
  },
  //hostname: 'https://seefte-mmallis87.c9.io',
  hostname: process.env.IP + process.env.PORT,
  app: {
    name: 'Osender - A fast worldwide mail delivery service.'
  },
  strategies: {
    local: {
      enabled: true
    },
    landingPage: '/',
    facebook: {
      clientID: 'DEFAULT_APP_ID',
      clientSecret: 'APP_SECRET',
      callbackURL: 'http://localhost:3000/api/auth/facebook/callback',
      enabled: false
    },
    twitter: {
      clientID: 'DEFAULT_CONSUMER_KEY',
      clientSecret: 'CONSUMER_SECRET',
      callbackURL: 'http://localhost:3000/api/auth/twitter/callback',
      enabled: false
    },
    github: {
      clientID: 'DEFAULT_APP_ID',
      clientSecret: 'APP_SECRET',
      callbackURL: 'http://localhost:3000/api/auth/github/callback',
      enabled: false
    },
    google: {
    //  clientID: '542491906202-dj88r52iiclamqrth5umvs36ilvr3d29.apps.googleusercontent.com',
    //  clientSecret: '-B0a3pEByC-lS6c2SU1OdKM5',
    //  callbackURL: 'http://localhost:3000/api/auth/google/callback',
    //  enabled: true
    //},
    clientID: "542491906202-dj88r52iiclamqrth5umvs36ilvr3d29.apps.googleusercontent.com",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri:"https://accounts.google.com/o/oauth2/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    clientSecret: "-B0a3pEByC-lS6c2SU1OdKM5",
    callbackURL: "http://localhost:3000/api/auth/google/callback",
    enabled: true
    },
    linkedin: {
      clientID: 'DEFAULT_API_KEY',
      clientSecret: 'APP_SECRET',
      callbackURL: 'http://localhost:3000/api/auth/linkedin/callback',
      enabled: false
    }
  },
  emailFrom: 'mmallis87@gmail.com', // sender address like ABC <abc@example.com>
  mailer: {
    service: 'Gmail', // Gmail, SMTP
    auth: {
      user: 'mmallis87@gmail.com',
      pass: 'PASSWORD'
    }
  },
  secret: 'SOME_TOKEN_SECRET'
};
