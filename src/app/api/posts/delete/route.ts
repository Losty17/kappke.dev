import { Post, PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { posts } = await request.json();

  const prisma = new PrismaClient();
  await prisma.post.deleteMany({
    where: {
      id: {
        in: posts.map((post: Post) => post.id),
      },
    },
  });

  await prisma.$disconnect();
  return NextResponse.json({});
}
