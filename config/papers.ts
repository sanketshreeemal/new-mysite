export type ContentType = "text" | "audio";

export interface ShortFormContent {
  id: string;
  title: string; // The main big text (Paper Title or Episode Name)
  author: string; // The top small text (Author Name or Podcast/Show Name)
  year?: string | number;
  type: ContentType;
  notes?: string;
}

// Mixed by string length to allow the flexbox grid to tile nicely
export const shortFormData: ShortFormContent[] = [
  {
    id: "cargo-cult-science",
    title: "Cargo Cult Science",
    author: "Richard Feynman",
    year: 1974,
    type: "text",
    notes: "Commencement Speech"
  },
  {
    id: "forty-year-career",
    title: "A Forty-Year Career",
    author: "Will Larson",
    year: 2019,
    type: "text",
    notes: "Blog Post"
  },
  {
    id: "intergenerational-transmission",
    title: "The Intergenerational Transmission of Cultural Capital",
    author: "John Mohr & Paul DiMaggio",
    year: 1995,
    type: "text",
    notes: "Paper"
  },
  {
    id: "in-praise-of-idleness",
    title: "In Praise of Idleness",
    author: "Bertrand Russell",
    year: 1932,
    type: "text",
    notes: "Essay"
  },
  {
    id: "letter-from-utopia",
    title: "Letter from Utopia",
    author: "Nick Bostrom",
    year: 2008,
    type: "text",
    notes: "Essay"
  },
  {
    id: "usefulness-of-useless-knowledge",
    title: "The Usefulness of Useless Knowledge",
    author: "Abraham Flexner",
    year: 1939,
    type: "text",
    notes: "Essay"
  },
  {
    id: "what-is-strategy",
    title: "What is Strategy?",
    author: "Michael Porter",
    year: 1996,
    type: "text",
    notes: "HBR Article"
  },
  {
    id: "social-capital-origins",
    title: "Social Capital: Its Origins and Applications in Modern Sociology",
    author: "Alejandro Portes",
    year: 1998,
    type: "text",
    notes: "Paper"
  },
  {
    id: "blue-ocean-strategy",
    title: "Blue Ocean Strategy",
    author: "W. Chan Kim & Renée Mauborgne",
    year: 2004,
    type: "text",
    notes: "Strategy"
  },
  {
    id: "social-critique-taste",
    title: "A Social Critique of the Judgement of Taste",
    author: "Pierre Bourdieu",
    year: 1984,
    type: "text",
    notes: "Distinction"
  },
  {
    id: "equality-of-what",
    title: "Equality of What?",
    author: "Amartya Sen",
    year: 1979,
    type: "text",
    notes: "Tanner Lecture"
  },
  {
    id: "huberman-sleep",
    title: "Master Your Sleep & Be More Alert When Awake",
    author: "HUBERMAN LAB",
    year: 2021,
    type: "audio",
    notes: "Podcast"
  },
  {
    id: "invisible-inequality",
    title: "Invisible Inequality: Social Class and Childrearing in Black & White Families",
    author: "Annette Lareau",
    year: 2002,
    type: "text",
    notes: "Social Class & Childrearing"
  },
  {
    id: "equity-partners-76ers",
    title: "To the equity partners of Philadelphia 76ers, L.P.",
    author: "Sam Hinkie",
    year: 2016,
    type: "text",
    notes: "Resignation Letter"
  },
  {
    id: "relativity-of-wrong",
    title: "The Relativity of Wrong",
    author: "Isaac Asimov",
    year: 1989,
    type: "text",
    notes: "Essay"
  },
  {
    id: "principles-psychology-habit",
    title: "The Principles of Psychology, Chapter 4: Habit",
    author: "William James",
    year: 1890,
    type: "text",
    notes: "Book Chapter"
  },
  {
    id: "give-ideas-legs",
    title: "Give Your Ideas Some Legs",
    author: "Oppezzo & Schwartz",
    year: 2014,
    type: "text",
    notes: "Creative Thinking & Walking"
  },
  {
    id: "death-sex-money-karl",
    title: "We're not going to have Karl again",
    author: "DEATH, SEX, & MONEY",
    year: "2020",
    type: "audio",
    notes: "Podcast Episode"
  },
  {
    id: "mundanity-of-excellence",
    title: "The Mundanity of Excellence",
    author: "Daniel Chambliss",
    year: 1989,
    type: "text",
    notes: "Paper"
  },
  {
    id: "how-to-do-great-work",
    title: "How to Do Great Work",
    author: "Paul Graham",
    year: 2023,
    type: "text",
    notes: "Blog Post"
  },
  {
    id: "forms-of-capital",
    title: "The Forms of Capital",
    author: "Pierre Bourdieu",
    year: 1986,
    type: "text",
    notes: "Paper"
  },
  {
    id: "psychology-of-imagination",
    title: "The Psychology of Imagination",
    author: "Frank Barron",
    year: 1958,
    type: "text",
    notes: "Paper"
  },
  {
    id: "mathematicians-lament",
    title: "A Mathematician's Lament",
    author: "Paul Lockhart",
    year: 2009,
    type: "text",
    notes: "Essay"
  },
  {
    id: "analogy-core-cognition",
    title: "Analogy as the Core of Cognition",
    author: "Douglas Hofstadter",
    year: 2001,
    type: "text",
    notes: "Paper"
  },
  {
    id: "symbols-class-status",
    title: "Symbols of Class Status",
    author: "Erving Goffman",
    year: 1951,
    type: "text",
    notes: "Paper"
  },
  {
    id: "road-to-self-renewal",
    title: "The Road to Self-Renewal",
    author: "John Gardner",
    year: 1994,
    type: "text",
    notes: "Essay"
  },
  {
    id: "strength-of-weak-ties",
    title: "The Strength of Weak Ties",
    author: "Mark Granovetter",
    year: 1973,
    type: "text",
    notes: "Paper"
  },
  {
    id: "economics-of-superstars",
    title: "The Economics of Superstars",
    author: "Sherwin Rosen",
    year: 1981,
    type: "text",
    notes: "Paper"
  },
  {
    id: "scents-and-sensibility",
    title: "Scents and Sensibility",
    author: "Brian Eno",
    year: 1992,
    type: "text",
    notes: "Essay"
  }
];
