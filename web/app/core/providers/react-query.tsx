import { QueryClient, QueryClientProvider as TanstackQueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 4
    }
  }
})

export const QueryClientProvider = ({ children }: { children: React.ReactNode }) => {
  return <TanstackQueryClientProvider client={queryClient}>{children}</TanstackQueryClientProvider>
}
