import { Router, Request, Response } from 'express';
import { validateDataForms } from "./middlewares/ValidateDataForm"
import { RegisterFormController } from './controllers/form/RegisterFormController'
import { DatailFormController } from './controllers/form/DatailFormController'


const router = Router()

router.get('/', (req: Request, res: Response) => {
    return res.json({ ok: true })
})

router.post('/form', validateDataForms, new RegisterFormController().handle)

router.get('/form', new DatailFormController().handle)


export { router }