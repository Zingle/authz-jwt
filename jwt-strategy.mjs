import jwt from "passport-jwt";

const {Strategy, ExtractJwt} = jwt;

export default function jwtStrategy({secret, audience, issuer}) {
  return new Strategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret,
    audience, issuer
  }, verify);

  function verify(jwt, done) {
    done(null, jwt);
  }
}
