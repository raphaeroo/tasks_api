import { Router } from 'express'

import {
    getTasks,
    saveTask,
    getTask,
    updateTask,
    finishedTask,
    removeTask
} from './controller/TasksController'

export const routes = Router()

routes.get('/', (req, res) => {
    return res.json({
        message: 'Tasks API - Server'
    })
})

routes.get('/tasks', getTasks)
routes.get('/tasks/:id', getTask)
routes.post('/tasks', saveTask)
routes.put('/tasks/:id', updateTask)
routes.patch('/tasks/:id', finishedTask)
routes.delete('/tasks/:id', removeTask)