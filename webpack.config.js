const path = require('path');
const crypto = require("crypto");

const crypto_orig_createHash = crypto.createHash;
crypto.createHash = algorithm => crypto_orig_createHash(algorithm == "md4" ? "sha256" : algorithm);

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: './src/index.ts',
  target: 'node',
  mode: 'none',
  resolve: {
    mainFields: ['module', 'main'],
    extensions: ['.js', '.ts']
  },
  externals: {
    'coc.nvim': 'commonjs coc.nvim'
  },
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'src')],
        use: [
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                sourceMap: true
              }
            }
          }
        ]
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js',
    libraryTarget: 'commonjs'
  },
  plugins: [],
  node: {
    __dirname: false,
    __filename: false
  }
};
