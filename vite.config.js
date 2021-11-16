import WindiCSS from 'vite-plugin-windicss';
import checker from 'vite-plugin-checker';

export default {
  plugins: [
    WindiCSS(),
    checker({
      typescript: true,
      eslint: {
        files: ['./src'],
        extensions: ['.ts'],
      },
    }),
  ],
  server: {
    port: 3002
  }
}