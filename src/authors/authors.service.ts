import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Injectable()
export class AuthorsService {
  private Authors = [
    {
      id: 1,
      name: 'James Kean',
      age: 35,
    },
    {
      id: 2,
      name: 'John Doe',
      age: 45,
    },
    {
      id: 3,
      name: 'Jane Kean',
      age: 45,
    },
    {
      id: 4,
      name: 'Peter James',
      age: 45,
    },
    {
      id: 5,
      name: 'Dean James',
      age: 45,
    },
  ];

  getAllAuthors() {
    if (this.Authors.length === 0) {
      throw new NotAcceptableException('There are no Authors');
    }
    return this.Authors;
  }

  getAuthorById(id: number) {
    const author = this.Authors.find((author) => author.id === id);
    if (!author) throw new NotFoundException('Author not Found');
    return author;
  }
  addAuthor(createAuthorDto: CreateAuthorDto) {
    const authorByHighestId = [...this.Authors].sort((a, b) => b.id - a.id);
    const newAuthor = {
      id: authorByHighestId[0].id + 1,
      ...createAuthorDto,
    };
    this.Authors.push(newAuthor);
    return newAuthor;
  }
  updateAuthor(id: number, updateAuthorDto: UpdateAuthorDto) {
    this.Authors = this.Authors.map((author) => {
      if (author.id) {
        return { ...author, ...updateAuthorDto };
      }
      return author;
    });
    return this.getAuthorById(id);
  }
  deleteAuthor(id: number) {
    const deletedAuthor = this.getAuthorById(id);
    this.Authors = this.Authors.filter((author) => author.id !== id);
    return deletedAuthor;
  }
}
