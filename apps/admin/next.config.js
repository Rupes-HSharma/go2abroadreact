const path = require('node:path');
module.exports = (phase) => ({
  distDir: process.env.NEXT_BUILD_DIR || (phase === 'phase-development-server' ? '.next-dev' : '.next'),
  outputFileTracingRoot: path.resolve(__dirname, '../..'),
  transpilePackages: ['@go2abroad/page-builder'],
});
