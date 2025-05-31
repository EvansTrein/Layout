// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  srcDir: 'src/',
  modules: ['@pinia/nuxt', 'nuxt-svgo'],
	svgo: {
    autoImportPath: './public/svg/',
  },
  css: ['./src/assets/styles/main.scss'],
  alias: {
    '@': './src',
    '@app': './src/app',
		'@public': './public',
    '@entities': './src/entities',
    '@features': './src/features',
    '@shared': './src/shared',
    '@pages': './src/pages',
    '@widgets': './src/widgets',
    '@processes': './src/processes'
  },
  typescript: {
    strict: true,
  },
});
