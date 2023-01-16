// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { CLIENT_PUBLIC_FILES_PATH } from 'next/dist/shared/lib/constants';
import prisma from '../../lib/prisma'

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const groups = await prisma.post.findMany()
console.log(groups)
  return {
    props : { groups }
  }
}