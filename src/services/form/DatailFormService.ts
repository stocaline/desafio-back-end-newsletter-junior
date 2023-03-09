import prismaClient from "../../prisma";

interface DatailFormRequest {
    initialDate: Date;
    finalDate: Date;
}

class DatailFormService {
    async execute({ initialDate, finalDate }: DatailFormRequest) {

        if(initialDate == null || finalDate == null){
            throw new Error("Data inválida")
        }

        const forms = await prismaClient.form.findMany({
            where: {
                created_at:{
                    gte: initialDate,
                    lte: finalDate,
                }
            }
        })

        return forms;
    }
}

export { DatailFormService }