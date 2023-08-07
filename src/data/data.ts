import { NoteDto } from 'src/notes/dto/note.dto';

export const typesTask = ['Task', 'Random Thought', 'Idea', 'Quotes'] as const;

export const mocked: NoteDto[] = [
  {
    id: '1z2ca9e2e03d12b326596bc4',
    createdAt: new Date(2022, 2, 15),
    archived: false,
    category: 'Quotes',
    content:
      'Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt',
    name: 'First note',
  },
  {
    id: '5d2ca9e2e03d40b326596aa7',
    createdAt: new Date(2022, 3, 15),
    archived: true,
    category: 'Task',
    content: 'Bananas and other',
    name: 'Buy products',
  },
  {
    id: '5d2ca9e29c8a94095c1288e0',
    createdAt: new Date(2022, 6, 22),
    archived: false,
    category: 'Random Thought',
    content:
      'Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt of 12.05.2022',
    name: 'Deserunt laborum id',
  },
  {
    id: '5d2ca9e2e03d40b3232496aa7',
    createdAt: new Date(2022, 11, 18),
    archived: true,
    category: 'Task',
    content:
      'Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt of 12.05.2022',
    name: 'Eu eafugiat non.',
  },
  {
    id: '5d2ca9e29c8a94095564788e0',
    createdAt: new Date(2022, 4, 1),
    archived: false,
    category: 'Idea',
    content:
      'Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt',
    name: 'Deserunt',
  },
  {
    id: '1a3ca9e29q8a94095c2378e0',
    createdAt: new Date(2023, 2, 12),
    archived: false,
    category: 'Random Thought',
    content: 'Random content is available',
    name: 'Random Thought',
  },
  {
    id: '2v5ca9e29q8a94095c3458e1',
    createdAt: new Date(2023, 6, 17),
    archived: false,
    category: 'Quotes',
    content: 'Random content is available',
    name: 'Title',
  },

  {
    id: '9v9aa1e29q8a9995c3458e1',
    createdAt: new Date(2023, 6, 2),
    archived: false,
    category: 'Idea',
    content: 'Random content is available 10.07.2023',
    name: 'Another title',
  },
  {
    id: '1x3bc1e29q8a9995c3458d2',
    createdAt: new Date(2023, 5, 10),
    archived: false,
    category: 'Task',
    content: 'Random content is available 10.07.2023',
    name: 'Another title',
  },
];
