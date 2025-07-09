import prisma from '$lib/db';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async () => {
	const pageViews = await prisma.pageView.findMany();
    console.log(pageViews)
	return {
		pageViews
	};
};
