export interface Question {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
}
export const questions: Question[] = [
  {
    id: "q1",
    text: "what is M in Mern?",
    options: ["MongoDB", "MySQL", "MariaDB", "PostgreSQL"],
    correctIndex: 0,
  },
  {
    id: "q2",
    text: "what is e in Mern?",
    options: ["Express", "Elasticsearch", "Ethereum", "Eclipse"],
    correctIndex: 0,
  },
  {
    id: "q3",
    text: "TypeScript is a superset of?",
    options: ["Python", "Java", "JavaScript", "C++"],
    correctIndex: 2,
  },
];