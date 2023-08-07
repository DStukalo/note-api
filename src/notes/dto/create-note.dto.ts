import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';
import { typesTask } from 'src/data/data';

const CreateNoteSchema = z.object({
  archived: z.boolean(),
  category: z.enum(typesTask),
  content: z.string().min(6).max(300),
  name: z
    .string()
    .regex(/^[A-Z][A-Za-z0-9!@#$%^&*()\-=+\\|[\]{};:'",.<>/? ]*$/)
    .min(5)
    .max(50),
});

export class CreateNoteDto extends createZodDto(CreateNoteSchema) {}
