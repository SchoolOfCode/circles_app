import { PrismaClient } from '@prisma/client';

let prisma;

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
}

export default prisma;

/* 
model groups {
  id Int @id @default(autoincrement())
  club_name String
  days String
  times String
  image String
  tagline String
  description String
  location String
  availability String
  email String
  telephone Int
}

model events {
  id Int @id @default(autoincrement())
  event_name String
  date String      //// check format
  time String      //// is there time format 
  club_name String    //// coming from groups table
  running boolean
}

model users {
  id Int @id @default(autoincrement())
  first_name String
  surname String
  email String
  telephone Int
  role String
  link_worker_id Int //// coming from same table
}

model feedback {
  id Int @id @default(autoincrement())
  user_id Int //// coming from user table(id)
  event_name String
  comment String
  rating Int
}

model user_circles {
  id Int @id @default(autoincrement())
  user_id Int   @relation()
  club_name String
}
*/