// app.service.ts
import { Injectable } from "@nestjs/common";
import { PostDto, SearchPostDto } from "./app.dto";
import { SearchService } from "src/search/search.service";

@Injectable()
export class AppService {
  private posts = [];

  constructor(private readonly searchService: SearchService) {}

  async createPost(postDto: PostDto) {
    return await this.searchService.createPost(postDto);
  }

  async updatePost(id: string, postDto: PostDto) {
    return await this.searchService.updatePostById(id, postDto);
  }

  async getPostById(id: string) {
    return await this.searchService.getPostById(id);
  }

  async deletePost(id: string) {
    return await this.searchService.deletePost(id);
  }

  async searchPost({ search_term: text, page, limit }: SearchPostDto) {
    return await this.searchService.search(text, page, limit);
  }
}
