import prismaClient from "../../prisma";

interface FormRequest {
    name: string;
    email: string;
    cpf: string;
    phone: string;
}

class RegisterFormService {
    async execute({ name, email, cpf, phone }: FormRequest) {

        const emailAlreadyExists = await prismaClient.form.findFirst({
            where: {
                email: email
            }
        })

        if (emailAlreadyExists) {
            throw new Error("Email já cadastrado!")
        }

        await prismaClient.form.create({
            data: {
                name: name,
                email: email,
                cpf: cpf,
                phone: phone,
            }
        })

        return { message: "Inscrição  concluida" };
    }
}

export { RegisterFormService }