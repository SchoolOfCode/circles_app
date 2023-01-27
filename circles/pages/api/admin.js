import prisma from "../../lib/prisma";

export default async function handleAdmin(req, res) {
  const getUserGroups = await prisma.users.findMany({
    where: {
      id: {
        contains: req.body.id,
      },
    },
    include: {
      user_circles: true
    },
  });
  res.json(getUserGroups);
}
