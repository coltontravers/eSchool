import { FastifyInstance } from 'fastify/types/instance';
import { getEvents } from '../controllers/events/events';
import { RegisterOptions } from 'fastify';

export const eventRoutes = (app: FastifyInstance, opts: RegisterOptions, next: (err?: Error) => void): void => {
	app.get('/api/events', getEvents);

	app.get('/api/more-events', getEvents);

	next();
};

export default eventRoutes;
