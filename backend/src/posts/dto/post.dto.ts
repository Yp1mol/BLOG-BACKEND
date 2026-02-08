import { IsString, MinLength, MaxLength } from 'class-validator';

export class CreatePostDto {
  @IsString({ message: 'The title must be a string' })
  @MinLength(3, { message: 'The title must containe at least 3 symbols' })
  @MaxLength(200, { message: 'The title must contain lower than 200 symbols' })
  title: string;

  @IsString({ message: 'The title must be a string' })
  @MaxLength(1000, { message: 'The title must contain lower than 1000 symbols' })
  content: string;
}