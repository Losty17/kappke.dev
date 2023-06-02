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
    title: "What do we do?",
    content:
      "We are software craftsmen. We construct solutions for your ideas.",
    callToAction: "Follow the path to see our craftsmanship",
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
