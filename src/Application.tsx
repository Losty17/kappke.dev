import Nullstack, { NullstackClientContext, NullstackNode } from "nullstack";

import { Home } from "@pages";
import "../tailwind.css";

declare function Head(): NullstackNode;

class Application extends Nullstack {
  prepare({ page }: NullstackClientContext) {
    page.locale = "pt-BR";
  }

  renderHead() {
    return (
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
    );
  }

  render() {
    return (
      <body class="bg-neutral-100 text-neutral-900 font-montserrat">
        <Head />
        <Home route="/" />
      </body>
    );
  }
}

export default Application;
