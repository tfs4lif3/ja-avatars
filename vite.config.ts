import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/",  //use for App Service
  base: "/ja-avatars/", //use for locally running app
  server: {
    watch: {
      usePolling: true
    }
  }
})
