import { trackPageView } from '$lib/db/crud';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const view = await trackPageView(url.pathname);
	return {
		view
	};
};
