import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/schedule': {
        target: 'https://tm.tapi.videoready.tv/content-detail/pub/api/v2/channels/',
        changeOrigin: true,
      },
      '/catchupEpg': {
        target: 'https://tm.tapi.videoready.tv/content-detail/pub/api/v1/',
        changeOrigin: true,
      },
      '/channels': {
        target: 'https://tb.tapi.videoready.tv/content-detail/pub/api/v6/',
        changeOrigin: true,
      }
    }
  }
})
