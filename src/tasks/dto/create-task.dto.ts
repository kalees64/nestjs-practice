import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateTaskDto {
  @IsNumber()
  id: string;

  @IsNotEmpty()
  title: string;

  @IsOptional()
  description: string;
}
