import configs from '@/core/configs/configs'
import { postsMock } from '@/core/mocks/post'
import { HttpResponse, http } from 'msw'

const getPosts = http.get(configs.API_URL + '/posts', async () => {
    return HttpResponse.json({
        items: postsMock,
        total: 10,
        page: 1,
        limit: 3
    }, {
        status: 200
    })
})

const postHandlers = [getPosts]

export default postHandlers
