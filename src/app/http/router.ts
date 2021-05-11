import { Router, Request, Response } from 'express'

const v1Router: Router = Router()

v1Router.get('/', (_: Request, response: Response) => {
    response.json({ message: 'Hello world !' });
});

v1Router.get('/test', (_: Request, response: Response) => {
    response.json({ message: 'Wesh poto' })
})

export { v1Router }

