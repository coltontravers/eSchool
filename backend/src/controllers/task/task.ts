import dayjs from 'dayjs';
import { Task } from '../../../../types/task';

const tasks: Task[] = [
	{
		type: 'homework',
		className: 'English',
		teacherName: 'Colton Travers',
		taskDueDate: dayjs().toISOString(),
		taskName: 'Spelling List',
		taskStatus: 100,
	},
];

interface TasksQueryInterface {
	startDate?: string;
	endDate?: string;
}

type TasksQueryType = FastifyRequest<{
	Querystring: TasksQueryInterface;
}>;

export const getEvents = (req: TasksQueryType, reply: FastifyReply): void => {
	try {
		const events = generateEvents(req.query.startDate, req.query.endDate);

		reply.code(200).send(events);
	} catch (err) {
		throw boom.boomify(err);
	}
};
