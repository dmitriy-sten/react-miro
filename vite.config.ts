import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsConfigPath from 'vite-tsconfig-paths'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'


export default defineConfig({
  plugins: [tsConfigPath(),
  TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
  react(),

  ],
})
