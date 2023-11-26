import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ElasticsearchService } from "@nestjs/elasticsearch";
import postDatas from "src/data/posts";

@Injectable()
export class SearchService {
  constructor(
    private readonly esService: ElasticsearchService,
    private readonly configService: ConfigService
  ) {}

  public async fakeData(): Promise<void> {
    const body = postDatas.reduce((acc, doc) => {
      acc.push({ index: { _index: this.configService.get("ELASTICSEARCH_INDEX") } }, doc);
      return acc;
    }, []);

    try {
      const res = await this.esService.bulk({
        body
      });
      console.log("res: ", res);
    } catch (error) {
      console.error("Error during bulk indexing:", error);
      throw new Error("Failed to bulk index documents");
    }
  }
  public async checkConnection() {
    try {
      const info = await this.esService.info();
      console.log(`Connected to Elasticsearch cluster: ${info.cluster_name} (Version: ${info.version.number})`);
    } catch (error) {
      console.error("Error connecting to Elasticsearch:", error);
    }
  }

  public async search(text: string, page: number = 1, limit: number = 10) {
    const from = (page - 1) * limit;

    let query: any = {
      highlight: {
        pre_tags: ["<b style='background-color: yellow;'>"],
        post_tags: ["</b>"],
        fields: {
          title: {}, // highlight the 'title' field
          content: {} // highlight the 'content' field
        }
      },
      size: limit, // Số lượng kết quả trả về cho mỗi trang
      from // Số lượng kết quả bắt đầu từ vị trí nào
    };

    if (text) {
      query.query = {
        multi_match: {
          query: text,
          fields: ["title", "content"]
        }
      };
    } else {
      query.query = {
        match_all: {}
      };
    }

    try {
      const res = await this.esService.search<any>({
        index: this.configService.get("ELASTICSEARCH_INDEX"),
        body: query
      });

      const hits = res.hits;
      return hits;
    } catch (error) {
      console.error("Failed to search post in Elasticsearch: ", error);
    }
  }

  public async getPostById(id: string) {
    const post = await this.esService.get({
      index: this.configService.get("ELASTICSEARCH_INDEX")!,
      id: id
    });
    return post;
  }

  public async createPost({ title, content, tags }: { title: string; content: string; tags: string[] }) {
    try {
      const res = await this.esService.index({
        index: this.configService.get("ELASTICSEARCH_INDEX"),
        body: {
          title,
          content,
          tags
        }
      });

      return res;
    } catch (error) {
      console.error("Failed to create post in Elasticsearch: ", error);
    }
  }

  public async updatePostById(id: string, { title, content, tags }: { title: string; content: string; tags: string[] }) {
    try {
      const response = await this.esService.update({
        index: this.configService.get("ELASTICSEARCH_INDEX"),
        id: id,
        body: {
          doc: {
            title,
            content,
            tags
          }
        }
      });

      return response;
    } catch (error) {
      // Handle errors, e.g., log or throw a custom exception
      console.error("Failed to update post in Elasticsearch: ", error);
    }
  }

  public async deletePost(id: string) {
    try {
      return await this.esService.delete({
        index: this.configService.get("ELASTICSEARCH_INDEX"),
        id
      });
    } catch (error) {
      console.error("Failed to remove post in Elasticsearch: ", error);
    }
  }
}
