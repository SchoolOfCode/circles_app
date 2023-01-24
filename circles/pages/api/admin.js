
import prisma from "../../lib/prisma";

export default async function handleusers(req, res) {
  const hello = await prisma.users.findMany();
  res.json(hello);
}

