import { Post } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();

  return NextResponse.json({ data });
}
