var shell = require('shelljs');

shell.exec('npm run build', function (code) {
  if (code === 0) {
    console.log(shell.cp('-r', './build/*', '~/Desktop/tempBuild/').code);
  }
});