import { NullstackServerContext } from "nullstack";
import { PrismaClient } from "@prisma/client";

type CustomServerContext = {
  db: PrismaClient;
};

export type ServerContext<T = {}> = NullstackServerContext<
  T & CustomServerContext
>;
