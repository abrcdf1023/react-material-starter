const proxy = require('http-proxy-middleware');

module.exports = app => {
  app.use(
    proxy(process.env.REACT_APP_API_BASE_URL, {
      target: process.env.REACT_APP_PROXY_API_SERVER
    })
  );
};
