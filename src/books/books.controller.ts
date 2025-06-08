import { CreateBookDto } from './dto/create-book.dto';
import { BooksService } from './books.service';
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
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  @Get() //GET /users
  getAllBooks() {
    return this.booksService.getAllBooks();
  }
  @Get(':id') //GET /users/:id
  getBookById(@Param('id', ParseIntPipe) id: number) {
    return this.booksService.getBooksById(id);
  }
  @Post() //POST /users
  addBook(
    @Body(ValidationPipe)
    createbookDto: CreateBookDto,
  ) {
    return this.booksService.addBook(createbookDto);
  }
  @Patch(':id') //PATCH /users/:id
  updateBook(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe)
    bookUpdateDto: UpdateBookDto,
  ) {
    return this.booksService.updateBook(id, bookUpdateDto);
  }
  @Delete(':id') //DELETE /users/:id
  deleteBook(@Param('id', ParseIntPipe) id: number) {
    return this.booksService.deleteBook(id);
  }
}
