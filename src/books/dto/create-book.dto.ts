import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  author: string;
  @IsString()
  Year_of_publication: string;
}
