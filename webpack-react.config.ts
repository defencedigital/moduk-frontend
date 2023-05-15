import path from 'node:path'
import type { Configuration } from 'webpack'

const context = path.join(__dirname, 'examples-site', 'react')
const config: Configuration = {
  context,
  devtool: false,
  entry: './example-client.tsx',
  optimization: {
    minimize: false,
    splitChunks: {
      cacheGroups: {
        chunks: 'all',
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(m?js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript',
              ['@babel/preset-react', {
                runtime: 'automatic',
              }],
            ],
          },
        },
      },
    ],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './examples-site/dist/react-example-client'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.mjs', '...'],
  },
}

export default config
