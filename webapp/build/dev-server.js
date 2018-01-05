const Bundler = require('parcel-bundler');
// const Bundler = require('/Users/linxingjian/work/e/parcel');
const Express = require('express');
const chalk = require('chalk');
const moky = require('/Users/linxingjian/work/e/moky/src/index');

const config = require('../moky.config.js');

const bundler = new Bundler('index.html', {});
bundler.bundle();
const app = Express();

// define proxy routes here
const argv = JSON.parse(process.env.npm_config_argv).original;
let proxy = argv.includes('-e') ? argv[argv.indexOf('-e') + 1] : false;

if(proxy){
    //proxy
    app.use(moky.middleware({
        frame: 'express',
        name: 'xhrProxy'
    })({proxy: proxy}));
}
//mock
app.use(moky.middleware({
    frame: 'express', name: 'xhrLocal'
})());

app.use(bundler.middleware());

app.listen(config.localPort || 3080);
console.log(chalk.green('server running... '))
