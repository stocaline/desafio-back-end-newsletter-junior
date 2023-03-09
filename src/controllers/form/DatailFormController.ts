import { Request, Response } from 'express';
import { DatailFormService } from '../../services/form/DatailFormService';

class DatailFormController{
    async handle(req: Request, res: Response){
        const { initialDate, finalDate } = req.body

        const datailFormService = new DatailFormService()
        
        const response = await datailFormService.execute({
            initialDate,
            finalDate
        })

        return res.json(response)
    }
}

export { DatailFormController }