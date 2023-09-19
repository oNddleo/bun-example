import { swagger } from '@elysiajs/swagger';
import { Elysia } from 'elysia';

export const swaggerDocs = (app: Elysia) =>
    app
        .use(swagger({
            documentation: {
                info: {
                    title: 'Swagger Example',
                    version: '0.0.1'
                },
                tags: [
                    {
                        name: 'Authorized',
                        description:
                            "Need a 'access_token' and 'refresh_token' cookie for authorization"
                    },
                    {
                        name: 'Authentication',
                        description: 'For user authentication'
                    }
                ]
            }
        }));
