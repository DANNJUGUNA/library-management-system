import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksController } from './books/books.controller';
import { BooksModule } from './books/books.module';
import { BooksService } from './books/books.service';
import { MembersController } from './members/members.controller';
import { MembersService } from './members/members.service';
import { MembersModule } from './members/members.module';
import { AuthorsModule } from './authors/authors.module';

@Module({
  imports: [BooksModule, MembersModule, AuthorsModule],
  controllers: [AppController, BooksController, MembersController],
  providers: [AppService, BooksService, MembersService],
})
export class AppModule {}
