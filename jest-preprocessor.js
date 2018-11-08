const typescript = require('typescript');
const babel = require('babel-core');
const tsconfig = require('./tsconfig.json');

module.exports = {
  process(src, path) {
    const isTs = path.match(/\.tsx?$/);
    const isJs = path.match(/\.jsx?$/);

    if (isTs) {
      src = typescript.transpile(src, tsconfig.compilerOptions, path);
    }

    if (isTs || isJs) {
      src = babel.transform(src, { extends: './.babelrc' }).code;
    }

    return src;
  }
};
