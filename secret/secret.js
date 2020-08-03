module.exports = {
    auth: {
        user: process.env.NODE_EMAIL,
        pass: process.env.NODE_PASSWORD
    },
    
    facebook: {
        clientID: process.env.FB_ID, //Facebook login app id
        clientSecret: process.env.FB_SECRET, //Facebook login secret key
        profileFields: ['email', 'displayName'],
        callbackURL: 'https://overc.herokuapp.com/auth/facebook/callback',
        passReqToCallback: true
    }
}