import Fastify from 'fastify';
import cors from 'fastify-cors';
import { Options } from './config/swagger';
import { config } from './config';
import swagger from 'fastify-swagger';
import routes from './routes';

// Configure HTTP server
const app = Fastify({ logger: true });

routes.forEach(route => {
	app.register(route);
});

// Register Swagger
app.register(swagger, Options);

app.register(cors, { origin: '*' });

const start = async (): Promise<void> => {
	try {
		await app.listen(config.app.port);
		app.swagger();
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
};
start();

export default app;
