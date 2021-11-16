import { defineConfig } from 'windicss/helpers';

export default defineConfig({
   theme: {
    extend: {
      extend: {
        spacing: {
         '100': '32rem'
       }
      },
      fontFamily: {
        sans: ['Patrick Hand', 'cursive'],
      }
    }
  }
})