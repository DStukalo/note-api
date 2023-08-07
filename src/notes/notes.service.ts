import { ForbiddenException, Injectable } from '@nestjs/common';
import { NoteDto } from './dto/note.dto';
import { mocked, typesTask } from 'src/data/data';
import { generateRandomString } from 'src/utils/generateRandomId';
import { CreateNoteDto } from './dto/create-note.dto';

@Injectable()
export class NotesService {
  private readonly notes: NoteDto[] = mocked;

  async createNote(dto: CreateNoteDto) {
    const note = {
      id: generateRandomString(25),
      createdAt: new Date(),
      name: dto.name,
      category: dto.category,
      content: dto.content,
      archived: false,
    };
    this.notes.push(note);
    return note;
  }

  deleteNote(noteId: string) {
    const noteIndex = this.notes.findIndex((note) => note.id === noteId);
    if (noteIndex < 0) {
      throw new ForbiddenException(`The note with id ${noteId} does not exist`);
    } else {
      const delNoteIndex = this.notes.findIndex((note) => note.id === noteId);
      const deleteNoteItem = this.notes.splice(delNoteIndex, 1);
      return deleteNoteItem;
    }
  }

  editNote(noteId: string, dto: NoteDto) {
    const noteIndex = this.notes.findIndex((note) => note.id === noteId);
    if (noteIndex < 0) {
      throw new ForbiddenException(`The note with id ${noteId} does not exist`);
    } else {
      const newNote = {
        id: this.notes[noteIndex].id,
        createdAt: this.notes[noteIndex].createdAt,
        archived: dto.archived,
        category: dto.category,
        content: dto.content,
        name: dto.name,
      };
      this.notes[noteIndex] = newNote;
      return newNote;
    }
  }

  getNote(noteId: string) {
    const noteIndex = this.notes.findIndex((note) => note.id === noteId);
    if (noteIndex < 0) {
      throw new ForbiddenException(`The note with id ${noteId} does not exist`);
    } else {
      return this.notes.find((note) => note.id === noteId);
    }
  }

  getNotes() {
    return this.notes;
  }

  getStats() {
    const result = typesTask.map((type) => ({
      name: type,
      archived: mocked
        .filter((el) => el.category === type)
        .filter((el) => el.archived).length,
      active: mocked
        .filter((el) => el.category === type)
        .filter((el) => !el.archived).length,
    }));
    return result;
  }
}
