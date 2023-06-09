import { Post } from "@prisma/client";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(request: Request) {
  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany({
    include: { author: true },
    orderBy: { createdAt: "desc" },
  });

  await prisma.$disconnect();
  return NextResponse.json({ data: posts });
}

export async function POST(request: Request) {
  const prisma = new PrismaClient();
  const data = await request.json();
  const post = await prisma.post.create({
    data: {
      title: data.title,
      content: data.content,
      published: false,
      authorId: data.author.id,
    },
    include: {
      author: true,
    },
  });

  await prisma.$disconnect();
  return NextResponse.json({ data: post });
}
