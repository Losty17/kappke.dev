import { NullstackClientContext } from "nullstack";
import { Globalizer } from "../i18n";

type CustomClientContext = {
  i18n: Globalizer;
};

export type ClientContext<T = {}> = NullstackClientContext<
  T & CustomClientContext
>;
