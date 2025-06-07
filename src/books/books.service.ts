import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  private Books = [
    {
      id: 1,
      title: 'The Den of Lions',
      author: 'James Kean',
      Year_of_publication: '2020',
    },
    {
      id: 2,
      title: 'Naturing Self Peace',
      author: 'John Doe',
      Year_of_publication: '2019',
    },
    {
      id: 3,
      title: 'The Seal',
      author: 'Jane Kean',
      Year_of_publication: '2023',
    },
    {
      id: 4,
      title: 'Haven of Hope',
      author: 'Peter James',
      Year_of_publication: '2010',
    },
    {
      id: 5,
      title: 'The Daring King',
      author: 'Dean James',
      Year_of_publication: '2020',
    },
  ];
  getAllBooks() {
    return this.Books;
  }

  getBooksById(id: number) {
    const book = this.Books.find((book) => book.id === id);
    return book;
  }
  addBook(createBookDto: CreateBookDto) {
    const booksByHighestId = [...this.Books].sort((a, b) => b.id - a.id);
    const newBook = {
      id: booksByHighestId[0].id + 1,
      ...createBookDto,
    };
    this.Books.push(newBook);
    return newBook;
  }
  updateBook(id: number, updateBookDto: UpdateBookDto) {
    this.Books = this.Books.map((book) => {
      if (book.id) {
        return { ...book, ...updateBookDto };
      }
      return book;
    });
    return this.getBooksById(id);
  }
  deleteBook(id: number) {
    const deletedBook = this.getBooksById(id);
    this.Books = this.Books.filter((book) => book.id !== id);
    return deletedBook;
  }
}
