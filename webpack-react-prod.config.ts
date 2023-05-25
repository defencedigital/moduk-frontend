import path from 'node:path'
import type { Configuration } from 'webpack'

const config: Configuration = {
  context: path.resolve(__dirname),
  devtool: 'source-map',
  entry: './src/react/index.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(m?js|tsx?)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(m?js|tsx?)$/,
        include: /\/node_modules\/react-merge-refs\//,
        use: ['babel-loader'],
      },
    ],
  },
  output: {
    library: {
      type: 'commonjs2',
    },
    filename: 'index.js',
    path: path.resolve(__dirname, './dist/react'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.mjs', '...'],
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    clsx: 'clsx',
    '@moduk/frontend/client': '@moduk/frontend/client',
    'govuk-frontend': 'govuk-frontend',
  },
}

export default config
