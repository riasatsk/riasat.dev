import prisma from ".";

export async function trackPageView(url:string) {
  const pageView = await prisma.pageView.upsert({
    where: { url },
    update: {
      count: {
        increment: 1,
      },
    },
    create: {
      url,
      count: 1,
    },
  });

  return pageView;
}