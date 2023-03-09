import { Request, Response } from 'express';
import { RegisterFormService } from '../../services/form/RegisterFormService';

class RegisterFormController{
    async handle(req: Request, res: Response){
        const { name, email, cpf, phone } = req.body

        const registerFormService = new RegisterFormService()
        
        const response = await registerFormService.execute({
            name,
            email,
            cpf,
            phone
        })

        return res.json(response)
    }
}

export { RegisterFormController }