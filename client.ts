import Nullstack from "nullstack";

import Application from "./src/Application";
import { ClientContext } from "@custom-types";
import i18n from "@i18n";

const context = Nullstack.start(Application) as ClientContext;

context.start = async function start() {
  context.i18n = i18n();
};

export default context;
