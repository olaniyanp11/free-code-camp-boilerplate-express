function auth(req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next()
}
module.exports = auth;
