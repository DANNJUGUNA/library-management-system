import {
    Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorService: AuthorsService) {}
  @Get()
  getAllAuthor() {
    return this.authorService.getAllAuthors();
  }
  @Get(':id')
  getAuthorById(@Param('id', ParseIntPipe) id: number) {
    return this.authorService.getAuthorById(id);
  }
  @Post()
  addAuthor(
    @Body(ValidationPipe)
    createAuthor: CreateAuthorDto,
  ) {
    return this.authorService.addAuthor(createAuthor);
  }
  @Patch(':id')
  updateAuthor(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe)
    updateAuthorDto: UpdateAuthorDto,
  ) {
    return this.authorService.updateAuthor(id, updateAuthorDto);
  }
  @Delete(':id')
  deleteAuthor(@Param('id', ParseIntPipe) id: number) {
    return this.authorService.deleteAuthor(id);
  }
}
