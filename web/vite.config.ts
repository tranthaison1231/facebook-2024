import { defineConfig } from 'vitest/config'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'
import { vitePlugin as remix } from '@remix-run/dev'
import { flatRoutes } from 'remix-flat-routes'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    !process.env.VITEST
      ? remix({
          ssr: false,
          ignoredRouteFiles: ['**/.*'],
          routes: async defineRoutes => {
            return flatRoutes('pages', defineRoutes)
          },
          appDirectory: 'app'
        })
      : react(),
    svgr(),
    tsconfigPaths()
  ],
  test: {
    include: ['**/*.test.{ts,tsx}'],
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts']
  }
})
