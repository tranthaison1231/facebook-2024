import { QueryClientProvider } from '@/core/providers/react-query'
import { render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import PostList from './PostList'

vi.mock('@remix-run/react', () => ({
	useOutletContext: () => ({
		me: {
			id: '1',
			name: 'John Doe',
			email: 'john.doe@example.com',
		}
	})
}))

describe('PostList', () => {
	const renderPostList = () => render(
		<QueryClientProvider>
			<PostList />
		</QueryClientProvider>
	)

	it('renders posts when they are fetched', async () => {
		renderPostList()

		expect(screen.getByTestId('post-skeleton')).toBeInTheDocument()

		await waitFor(() => {
			expect(screen.getByText('This is a test post 1')).toBeInTheDocument()
			expect(screen.getByText('This is a test post 2')).toBeInTheDocument()
		})

		expect(screen.queryByTestId('post-skeleton')).not.toBeInTheDocument()
	})
})