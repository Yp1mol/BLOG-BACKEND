const { Injectable } = require('@nestjs/common');
@Injectable()
class LoggingMiddleware {
    use(req, res, next) {
        console.log(`${req.method} ${req.originalUrl}`);
        next();
    }
}
module.exports = { LoggingMiddleware };