import { IsString, MinLength, MaxLength } from 'class-validator';

export class CreatePostDto {
  @IsString({ message: 'The title must be a string' })
  @MinLength(3, { message: 'The title must containe at least 3 symbols' })
  @MaxLength(200, { message: 'The title must contain lower than 200 symbols' })
  username: string;

  @IsString({ message: 'The title must be a string' })
  @MinLength(3, { message: 'The title must containe at least 3 symbols' })
  @MaxLength(100, { message: 'The title must contain lower than 100 symbols' })
  password: string;
}