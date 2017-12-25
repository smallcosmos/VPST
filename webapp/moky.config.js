const path = require('path');

module.exports = {
  /* Listen port for moky server, OPTIONAL */
  localPort: 3080,
  /* Asnyc menu mock data, OPTIONAL */
  asyncMockPath: path.join(__dirname, 'moky_mock', 'async_mock'),
  /* Path of favicon.ico, OPTIONAL */
  faviconPath: path.join(__dirname, 'static/favicon.ico'),
  /* Static router, OPTIONAL but usually required */
  /* Default mock data, OPTIONAL */
  defaultMock: { code: 200, message: 'ok' },
  /* Not show logs if url is in the list, OPTIONAL */
  filteredUrls: [],
  /* Custom middlewares for moky, OPTIONAL */
  middlewares: path.resolve(__dirname, 'build', 'moky.middleware.js'),
  /* Settings for proxy, OPTIONAL */
  proxyMaps: {
      local: 'http://localhost:8080',
      stable_dev: 'http://10.165.125.68:8182',
      stable_master: 'http://10.165.126.187:10080',
      wangqiang: 'http://10.240.180.191:8080',
      hotfix2: 'http://10.165.124.11:8182'
  },
}
