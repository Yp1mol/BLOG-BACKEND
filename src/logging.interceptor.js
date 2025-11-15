const { Injectable } = require('@nestjs/common');
const { tap } = require('rxjs/operators');
@Injectable()
class LoggingInterceptor {
    intercept(context, next) {
        const now = Date.now();
        return next.handle().pipe(tap(() => console.log(`After... ${Date.now() - now}ms`)));
    }
}
module.exports = { LoggingInterceptor };