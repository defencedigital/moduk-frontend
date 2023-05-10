import postcssFailOnWarn from 'postcss-fail-on-warn'
import postcssPresetEnv from 'postcss-preset-env'

export default {
  plugins: [
    postcssPresetEnv(),
    postcssFailOnWarn,
  ],
}
