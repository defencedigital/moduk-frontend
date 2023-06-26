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
            comments: true,
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
    alias: {
      '@moduk/frontend/react': path.resolve(__dirname, 'src/react/'),
      '@moduk/frontend/client': path.resolve(__dirname, 'src/client/'),
    },
    extensions: ['.ts', '.tsx', '.mjs', '...'],
  },
}

export default config
