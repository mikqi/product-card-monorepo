import { defineConfig } from 'tsup'
import cssModulesPlugin from 'esbuild-css-modules-plugin'

export default defineConfig({
  treeshake: true,
  minify: false,
  clean: true,
  dts: true,
  splitting: false,
  format: ['esm', 'cjs'],
  external: ['react'],
  outExtension({ format }) {
    console.log(format)
    return {
      js: `.${format}.js`,
    }
  },
  target: 'es5',
  esbuildPlugins: [cssModulesPlugin()],
})
