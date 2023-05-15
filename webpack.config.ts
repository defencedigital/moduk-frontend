import path from 'node:path'
import type { Configuration } from 'webpack'

const config: Configuration = {
  context: path.resolve(__dirname),
  devtool: 'source-map',
  entry: './src/client/index.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(m?js|ts)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  output: {
    library: {
      name: 'MODUK',
      type: 'umd',
    },
    filename: 'moduk-frontend.umd.js',
    path: path.resolve(__dirname, './dist/client'),
  },
  resolve: {
    extensions: ['.ts', '.mjs', '...'],
  },
}

export default config
