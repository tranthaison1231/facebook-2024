import './core/styles/globals.css'
import './core/styles/sonner.css'
import { Toaster } from 'sonner'
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import { QueryClientProvider } from '@/core/providers/react-query'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <QueryClientProvider>
          <Toaster richColors position="top-right" />
          {children}
        </QueryClientProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function HydrateFallback() {
  return <p>Loading...</p>
}
