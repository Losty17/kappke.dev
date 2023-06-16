import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const prisma = new PrismaClient();
  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
    include: { author: true },
  });

  await prisma.$disconnect();
  return NextResponse.json({ ...post });
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { blocks } = await request.json();

  const prisma = new PrismaClient();
  const post = await prisma.post.update({
    where: { id: Number(id) },
    data: { content: JSON.stringify(blocks) },
  });

  await prisma.$disconnect();
  return NextResponse.json({ ...post });
}
