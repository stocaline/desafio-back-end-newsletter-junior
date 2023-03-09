import { Router, Request, Response } from 'express';
import { RegisterFormController } from './controllers/form/RegisterFormController'


const router = Router()

router.get('/', (req: Request, res: Response) => {
    return res.json({ ok: true })
})

router.post('/', new RegisterFormController().handle)


export { router }