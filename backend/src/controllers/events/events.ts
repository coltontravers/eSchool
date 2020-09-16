import boom from '@hapi/boom';
import { FastifyRequest, FastifyReply } from 'fastify';
import dayjs from 'dayjs';

interface EventsInterface {
	day: dayjs.Dayjs;
	events: string[];
}

const generateEvents = (
	startDate: string = dayjs().toISOString(),
	endDate: string = dayjs()
		.add(1, 'day')
		.toISOString(),
): EventsInterface[] => {
	console.log({ startDate });
	const diff = dayjs(endDate).diff(startDate, 'day');

	const arrayOfEvents = Array.from(
		{
			length: diff,
		},
		(x, i) => {
			console.log('generating at:', i);
			const randonNumber = Math.floor(Math.random() * 6) + 1;

			const currentDay = dayjs(startDate).add(i, 'day');

			const events = [];

			for (let index = 0; index < randonNumber; index++) {
				events.push("Here's an event!");
			}

			return {
				day: currentDay,
				events,
			};
		},
	);

	return arrayOfEvents;
};

interface EventQueryInterface {
	startDate?: string;
	endDate?: string;
}

type EventsQueryType = FastifyRequest<{
	Querystring: EventQueryInterface;
}>;

export const getEvents = (req: EventsQueryType, reply: FastifyReply): void => {
	try {
		const events = generateEvents(req.query.startDate, req.query.endDate);

		reply.code(200).send(events);
	} catch (err) {
		throw boom.boomify(err);
	}
};
