import { client } from "./client.js"

(async function up() {
    
    await client.query(`
        CREATE TABLE IF NOT EXISTS "forms_answers" (
            "id" SERIAL PRIMARY KEY,
            "name" TEXT NOT NULL,
            "email" TEXT NOT NULL,
            "cpf" TEXT NOT NULL,
            "phone" TEXT NOT NULL,
            "created_at" DATE NOT NULL
        );

    `)

    await client.end()
})()