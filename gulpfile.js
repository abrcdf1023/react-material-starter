const createGulpTasks = require('@e-group/devops/createGulpTasks');

const path = require('path');

createGulpTasks({
  serverDir: path.resolve(__dirname, './serverDir/website'),
  buildFolder: '/source'
});
