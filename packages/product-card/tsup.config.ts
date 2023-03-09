import { defineConfig } from 'tsup'
import cssModulesPlugin from 'esbuild-css-modules-plugin'

export default defineConfig({
  treeshake: true,
  sourcemap: true,
  minify: false,
  clean: true,
  dts: true,
  splitting: false,
  format: ['esm', 'cjs'],
  external: ['react'],
  legacyOutput: true,
  target: 'es5',
  esbuildPlugins: [cssModulesPlugin()],
})
