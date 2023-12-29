require('dotenv').config()
const Fastify = require('fastify');
const fastifyMongooseAPI = require('fastify-mongoose-api');
const fastifyCors = require('@fastify/cors');
const fastifyFormbody = require('@fastify/formbody');
const fastifySwagger = require('@fastify/swagger');

async function bootstrap() {
    try {
        const fastify = Fastify({ logger: true });
        fastify.register(fastifyCors);
        fastify.register(fastifyFormbody);


        await fastify.ready();
        const PORT = process.env.PORT || 4000;
        const address = await fastify.listen(PORT, '0.0.0.0');
        console.log(`Server listening on address: ${address}`);
    } catch (err) {
        console.error(`Can't start server: ${err.message}`);
    }
}

bootstrap();