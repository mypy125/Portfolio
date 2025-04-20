// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   base: "/Portfolio/",
//   plugins: [react()],
  
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio/', 
  plugins: [react()],
  server: {
    historyApiFallback: true,
  }
})