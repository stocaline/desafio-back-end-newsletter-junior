import { Router, Request, Response } from 'express';
import { validateDataForms } from "./middlewares/ValidateDataForm"
import { RegisterFormController } from './controllers/form/RegisterFormController'


const router = Router()

router.get('/', (req: Request, res: Response) => {
    return res.json({ ok: true })
})

router.post('/', validateDataForms, new RegisterFormController().handle)


export { router }