const Bundler = require('parcel-bundler');
const Express = require('express');
const httpProxy = require('http-proxy-middleware');

// const {mockMiddle} = require('mock')

const config = require('./config');

const bundler = new Bundler('~/index.html');
const app = Express();

// define proxy routes here
const argv = JSON.parse(process.env.npm_config_argv).original;
const mock = argv.includes('-m');
let proxy = argv.includes('-e') ? argv[argv.indexOf('-e') + 1] : false;

if(proxy){
    //proxy
    const proxyTable = config.proxyTable;
    proxy = proxyTable[proxy] || proxy;
    // app.use(httpProxy('/api', {
    //     target: proxy
    // }));
}else if(mock){
    //mock
    // app.use(mockMiddleware);
}

app.use(bundler.middleware());

app.listen(config.port || 9090);