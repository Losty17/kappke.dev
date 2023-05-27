export type Globalizer = {
  greeting: {
    welcome: string;
    to: string;
  };
  seeMore: string;
  whoAmI: {
    title: string;
    content: string;
  };
  myProjects: {
    title: string;
    content: string;
  };
  recentPosts: {
    title: string;
    empty: string;
  };
  contactMe: {
    title: string;
  };
};

type ReadonlyGlobalizer = {
  readonly [K in keyof Globalizer]: Globalizer[K];
};

import English from "./en";
import Portuguese from "./pt";

export default () => {
  let language: string;
  let i18n = {};

  try {
    language = navigator?.language.split(/[-_]/)[0] || "en"; // language without region code
  } catch (error) {
    language = "en";
  }

  switch (language) {
    case "pt":
      i18n = Portuguese;
      break;
    default:
      i18n = English;
      break;
  }

  return i18n as ReadonlyGlobalizer;
};
