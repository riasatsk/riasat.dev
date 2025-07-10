import prisma from '$lib/db';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async () => {
	const messages = await prisma.contactMessage.findMany();
	return {
		messages
	};
};
