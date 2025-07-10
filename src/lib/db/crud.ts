import prisma from '.';

export async function trackPageView(url: string) {
	const pageView = await prisma.pageView.upsert({
		where: { url },
		update: {
			count: {
				increment: 1
			}
		},
		create: {
			url,
			count: 1
		}
	});

	return pageView;
}

export async function createContactMessage(name: string, email: string, message: string) {
	try {
		const newMessage = await prisma.contactMessage.create({
			data: {
				name,
				email,
				message
			}
		});
		return newMessage;
	} catch (error) {
		console.error('Error creating contact message:', error);
		throw error;
	}
}

export async function getContactMessage() {
	try {
		const messages = await prisma.contactMessage.findMany({
			orderBy: {
				createdAt: 'desc'
			}
		});
		return messages;
	} catch (error) {
		console.error('Error retrieving contact messages:', error);
		throw error;
	}
}
