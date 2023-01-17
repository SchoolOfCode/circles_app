import { PrismaClient } from "@prisma/client";

let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;

// model Groups {
//   id Int @id @default(autoincrement())
//   club_name String @unique
//   days String
//   times String
//   image String
//   tagline String
//   description String
//   location String
//   availability String
//   email String
//   telephone Int
// }

// model Events {
//   id Int @id @default(autoincrement())
//   event_name String
//   date String
//   time String
//   groups Groups @relation(fields: [club_name], references: [club_name])
//   club_name String
//   running Boolean @default(true)
// }

// model Users {
//   id Int @id @default(autoincrement())
//   first_name String
//   surname String
//   email String
//   telephone Int
//   role String
//   link_worker_id Int
// }

// model Feedback {
//   id Int @id @default(autoincrement())
//   user Users @relation(fields: [user_id], references: [id])
//   user_id Int
//   event_name String
//   comment String
//   rating Int
// }

// model User_circles {
//   id Int @id @default(autoincrement())
//   user Users @relation(fields: [user_id], references: [id])
//   user_id Int
//   club_name String
// }
