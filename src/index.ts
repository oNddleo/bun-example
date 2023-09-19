import 'module-alias/register';
import { Elysia } from 'elysia'
import { swaggerDocs } from '@routers/swagger';
import { auth } from '@routers/auth';

const app = new Elysia()
    .use(swaggerDocs)
    .use(auth)
    .listen(3000)


console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
