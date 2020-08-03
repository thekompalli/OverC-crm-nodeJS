module.exports = {
    auth: {
        user: process.env.NODE_EMAIL,
        pass: process.env.NODE_PASSWORD
    },
    
    facebook: {
        clientID: FB_ID, //Facebook login app id
        clientSecret: FB_SECRET, //Facebook login secret key
        profileFields: ['email', 'displayName'],
        callbackURL: 'http://localhost:3000/auth/facebook/callback',
        passReqToCallback: true
    }
}