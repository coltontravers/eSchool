import { FastifyInstance } from 'fastify/types/instance';
import { RegisterOptions } from 'fastify';
import { getClasses } from '../controllers/class/class';

export const classRoutes = (app: FastifyInstance, opts: RegisterOptions, next: (err?: Error) => void): void => {
	app.get('/api/classes', getClasses);

	next();
};

export default classRoutes;
