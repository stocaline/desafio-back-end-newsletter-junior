import { NextFunction, Request, Response } from 'express';

export function validateDataForms(req: Request, res: Response, next: NextFunction) {
    const { name, email, cpf, phone } = req.body
    var emailFormat = /\S+@\S+\.\S+/;

    if( name === "" || email === "" || cpf === "" || phone === "" ){
        throw new Error("Dados incompletos")
    }
    if( name == null || email == null || cpf == null || phone == null ){
        throw new Error("Dados incompletos")
    }

    if(!emailFormat.test(email)){
        throw new Error("Email inválido")
    }
    return next()
}
