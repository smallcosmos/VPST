const Bundler = require('parcel-bundler');
const path = require('path');

const bundler = new Bundler(path.resolve(__dirname, '../index.html'));
bundler.bundle();

function historyApiFallback (options) {
    const middleware = require('connect-history-api-fallback')(options);

    return (ctx, next) => {
        middleware(ctx, null, ()=>{});
        return next();
    };
}


module.exports = (app, options, render, async) => {
    // app.use(historyApiFallback({
    //     index: 'index.html',
    //     verbose: true
    // }));
    app.use(bundler.middleware());
    // moky async middleware, includes proxy and mock server
    // app.use(async(options));
};
