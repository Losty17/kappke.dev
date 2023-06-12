import { Post } from "@prisma/client";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  const prisma = new PrismaClient();
  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
    include: { author: true },
  });

  await prisma.$disconnect();
  return NextResponse.json({ data: post });
}
