import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { NotesService } from './notes.service';
import { NoteDto } from './dto/note.dto';

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Get()
  getAll() {
    return this.notesService.getNotes();
  }

  @Get('stats')
  geStats() {
    return this.notesService.getStats();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.notesService.getNote(id);
  }

  @Post()
  createNote(@Body() dto: CreateNoteDto) {
    return this.notesService.createNote(dto);
  }

  @Patch(':id')
  updateNote(@Param('id') id: string, @Body() dto: NoteDto) {
    return this.notesService.editNote(id, dto);
  }

  @Delete(':id')
  deleteNote(@Param('id') id: string) {
    return this.notesService.deleteNote(id);
  }
}
