import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Ymar Frenken ",
  EMAIL: "mail@ymar.nl",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "A blog about technology, music and movie from a consultant.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X",
    HREF: "https://X.com/ymarfrenken",
  },
  {
    NAME: "trailead",
    HREF: "https://www.salesforce.com/trailblazer/ymar",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/ymarfrenken",
  },
];