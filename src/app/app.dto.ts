import { IsString, IsArray, IsNotEmpty } from "class-validator";

export class PostDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsArray()
  tags: string[];
}

export class SearchPostDto {
  constructor() {
    this.page = 1;
    this.limit = 10;
  }
  @IsString()
  page: number;

  @IsString()
  limit: number;

  @IsString()
  search_term: string;
}
