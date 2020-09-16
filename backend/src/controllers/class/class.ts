import boom from '@hapi/boom';
import { FastifyRequest, FastifyReply } from 'fastify';

const recentGradesArr = [
	{
		name: 'Assignment 1',
		grade: 96,
	},
	{
		name: 'Assignment 2',
		grade: 85,
	},
	{
		name: 'Assignment 3',
		grade: 74,
	},
	{
		name: 'Assignment 4',
		grade: 63,
	},
];

const upcomingArr = [
	{
		name: 'Test 1',
		date: '8/22',
	},
	{
		name: 'Test 2',
		date: '8/24',
	},
	{
		name: 'Test 3',
		date: '8/27',
	},
	{
		name: 'Test 4',
		date: '8/29',
	},
];

const filesArr = [
	{
		name: 'Pdf 1',
	},
	{
		name: 'Pdf 2',
	},
	{
		name: 'Pdf 3',
	},
	{
		name: 'Pdf 4',
	},
];

const classes = [
	{
		name: 'English',
		teacher: 'Colton Travers',
		grade: 96,
		time: '8am - 9pm',
		recentGrades: recentGradesArr,
		upcoming: upcomingArr,
		files: filesArr,
	},
	{
		name: 'The Art of Warcraft: A Closer Look at the Virtual World Phenomenon',
		teacher: 'Colton Travers',
		grade: 85,
		time: '8am - 9pm',
		recentGrades: recentGradesArr,
		upcoming: upcomingArr,
		files: filesArr,
	},
	{
		name: 'Algebra 2',
		teacher: 'Colton Travers',
		grade: 74,
		time: '8am - 9pm',
		recentGrades: recentGradesArr,
		upcoming: upcomingArr,
		files: filesArr,
	},
	{
		name: 'Invented Languages: Klingon and Beyond',
		teacher: 'Colton Travers',
		grade: 63,
		time: '8am - 9pm',
		recentGrades: recentGradesArr,
		upcoming: upcomingArr,
		files: filesArr,
	},
	{
		name: 'Geometry',
		teacher: 'Colton Travers',
		grade: 52,
		time: '8am - 9pm',
		recentGrades: recentGradesArr,
		upcoming: upcomingArr,
		files: filesArr,
	},
	{
		name: 'Underwater Basket Weaving',
		teacher: 'Colton Travers',
		grade: 90,
		time: '8am - 9pm',
		recentGrades: recentGradesArr,
		upcoming: upcomingArr,
		files: filesArr,
	},
];

export const getClasses = (req: FastifyRequest, reply: FastifyReply): void => {
	try {
		reply.code(200).send(classes);
	} catch (err) {
		throw boom.boomify(err);
	}
};
