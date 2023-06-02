const i18n = {
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    posts: "Posts",
    contact: "Contact",
  },
  footer: {
    made: "Made",
    by: "by",
    with: "with",
    using: "using",
    and: "and",
    hosted: "hosted",
  },
  greeting: {
    welcome: "Welcome",
    to: "to",
  },
  seeMore: "See more",
  whoAmI: {
    title: "Who am I?",
    content:
      "Driven by the pursuit of knowledge, I, Vinícius Kappke, am a passionate Fullstack Developer. Certified by LEAD Dell, I have experience in web application development, automation, and chatbots. As a student of Systems Analysis and Development, I am capable of gathering requirements and estimating costs and deadlines, as well as developing and testing applications. Currently, I work full-time as a developer for enterprise solutions, focusing on the Business Process Management (BPM) methodology.",
  },
  myProjects: {
    title: "What do I do?",
    content:
      "I am a software craftsman. I construct the solutions for your ideas.",
    callToAction: "Follow the path to see my craftsmanship",
    projects: [
      {
        title: "Preceptor",
        content:
          "Who said games and education shouldn't mix? Preceptor is a chatbot framework, firstly applied to teach basics of Computer Science to kids in school, using a quiz-like approach with paths and rewards. Built around the Discord platform, it is a fun and interactive way to learn, that enters in students daily lives. It was built using Python, through the Discord.py API, and MySQL to store the students data.",
      },
      {
        title: "Wordsmith",
        content:
          "For your needs to craft text, be it news or stories, I shall bring you the pen and paper. This text editor is a web application that allows you to write and edit text, with a live preview of the final result. It was built using plain JavaScript, and built with Webpack to be delivered as a bundle for use in any project. It exports its data in a JSON-like format, and can import data from a JSON file as well, making it easy to store your data in any database.",
      },
      {
        title: "Bibliotheca",
        content:
          "So, you need to manage your website? I provide you with my Bibliotheca, a Content Management System. It is a web application that allows you to manage your website's content, bundled with Wordsmith to easily create your texts. It provides a simple way to manage your websites posts, comments, users, and much more.",
      },
    ],
  },
  recentPosts: {
    title: "Recent posts",
    empty: "No posts yet",
  },
  contactMe: {
    title: "Contact",
    name: "Name",
    email: "Email",
    message: "Type your message",
    send: "Send",
    country: "Country",
    phone: "Phone",
    subject: "Subject",
    refer: "How did you find me?",
    success: "Message sent successfully!",
  },
};

export type Globalizer = typeof i18n;

type ReadonlyGlobalizer = {
  readonly [K in keyof Globalizer]: Globalizer[K];
};

export default () => {
  return i18n as ReadonlyGlobalizer;
};
