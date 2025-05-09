let index = ['學習 Nuxt 3', '完成待辦事項應用', 'Testing']

export default defineEventHandler(async (event) => {
    if (event.node.req.method === 'GET') {
        return index
    }
    if (event.node.req.method === 'POST') {
        const body = await readBody(event)
        index.push(body.todo)
        return { success: true }
    }
})