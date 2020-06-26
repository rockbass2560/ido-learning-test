const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

passport.use("jwt",new JWTStrategy({
    secretOrKey: process.env.SECRET_KEY,
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
}, (token, done)=> {
    try {
        done(null, token.username);
    } catch (error) {
        done(error);
    }
}));

module.exports = passport.authenticate("jwt", {session: false});