import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'
import { vitePlugin as remix } from '@remix-run/dev'
import { flatRoutes } from 'remix-flat-routes'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    remix({
      ssr: false,
      ignoredRouteFiles: ['**/.*'],
      routes: async defineRoutes => {
        return flatRoutes('pages', defineRoutes)
      },
      appDirectory: 'app'
    }),
    svgr(),
    tsconfigPaths()
  ]
})
