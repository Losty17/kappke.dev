import Nullstack from "nullstack";
import { ServerContext } from "@custom-types";

import Application from "./src/Application";
import { PrismaClient } from "@prisma/client";

// @ts-ignore
const context = Nullstack.start(Application) as ServerContext;

context.start = async function start() {
  context.db = new PrismaClient();

  context.db.user.findMany().then((users) => {
    console.log(users);
  });
};

export default context;
