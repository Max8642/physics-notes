export type NoteNode = {
  title: string;
  href?: string;
  children?: NoteNode[];
};

export const notesTree: NoteNode[] = [
  {
    title: "Quantum Mechanics",
    href: "/quantum",
    children: [
      {
        title: "Commutators",
        href: "/quantum/commutators",
      },
    ],
  },
  {
    title: "Classical Mechanics",
    href: "/classical-mechanics",
    children: [],
  },
  {
    title: "Electromagnetism",
    href: "/electromagnetism",
    children: [],
  },
];