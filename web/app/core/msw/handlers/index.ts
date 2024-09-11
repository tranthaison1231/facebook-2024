import authHandlers from './auth'
import postHandlers from './post'

const handlers = [...authHandlers, ...postHandlers]

export default handlers
