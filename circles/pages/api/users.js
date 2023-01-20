import prisma from "../../lib/prisma";

//return user data for user that has email same as session user

export default async function handleUser(req, res) {
  const getUser = await prisma.users.findMany({
    where: {
      email: {
        contains: req.body.email,
      },
    },
  });
  //     where: {
  //       email: req.body,
  //     },
  //   });
  res.json(getUser);
}

//session.user.email
//const { data: session } = useSession();
