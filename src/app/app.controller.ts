// app.controller.ts
import { Controller, Get, Post, Param, Query, Body, Render, Res } from "@nestjs/common";
import { AppService } from "./app.service";
import { PostDto, SearchPostDto } from "./app.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render("index") //
  async getIndex(@Query() { page, limit, search_term }: SearchPostDto): Promise<any> {
    try {
      const data = await this.appService.searchPost({ page, limit, search_term });
      // console.log("data: ", data);
      return { title: "Posts", data };
    } catch (error) {
      console.error("Error during search:", error);
      return { title: "Posts", error: "Internal Server Error" };
    }
  }

  @Get("/search")
  async searchPosts(@Query() searchDto: SearchPostDto, @Res() res) {
    console.log("searchDto: ", searchDto);
    try {
      const data = await this.appService.searchPost(searchDto);
      res.json(data);
    } catch (error) {
      console.error("Error during search:", error);
      res.status(400).json({ error: "Internal Server Error" });
    }
  }

  @Get("/create")
  @Render("create") // Assuming you have a template engine configured
  async getCreatePostView(): Promise<any> {
    return { title: "Create post" };
  }
  @Get("/:id")
  @Render("detail") // Assuming you have a template engine configured
  async getPostViewById(@Param("id") id: string): Promise<any> {
    try {
      const data = await this.appService.getPostById(id);
      return { title: "detail ", data };
    } catch (error) {
      console.error("Error during get detail:", error);
      return { title: "detail ", error: "Internal Server Error" };
    }
  }

  @Post("/create")
  async createPost(@Body() postDto: PostDto, @Res() res): Promise<any> {
    console.log("createPost: ", postDto);
    try {
      const data = await this.appService.createPost(postDto);
      console.log("Data create: ", data);
      res.redirect(`/${data._id}`);
    } catch (error) {
      console.error("Error during update:", error);
      res.redirect(`/create`);
    }
  }

  @Post("/:id/update")
  async updatePost(@Param("id") id: string, @Body() postDto: PostDto, @Res() res): Promise<any> {
    console.log("updatePost: ", postDto);
    try {
      const data = await this.appService.updatePost(id, postDto);
      console.log("Data htanh con: ", data);
      res.redirect(`/${id}`);
    } catch (error) {
      console.error("Error during update:", error);
      res.redirect(`/${id}`);
    }
  }

  @Post("/:id/delete")
  async deletePost(@Param("id") id: string, @Res() res): Promise<any> {
    console.log("delete: ", id);
    try {
      const data = await this.appService.deletePost(id);
      console.log("Data delete: ", data);
      res.redirect(`/`);
    } catch (error) {
      console.error("Error during delete:", error);
      res.redirect(`/`);
    }
  }
}
