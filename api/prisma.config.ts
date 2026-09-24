import { defineConfig } from 'prisma/config';

process.loadEnvFile('.env');// carregar o arquivo do .env para puxar as variaveis 

export default defineConfig({
    schema: 'prisma/schema.prisma',
    migrations: {
        path: 'prisma/migrations'
    },
    datasource: {
        url: process.env.DATABASE_URL
     }
});

