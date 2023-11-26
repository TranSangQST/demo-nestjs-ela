import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import hbs from "hbs";
import { join } from "path";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, "..", "public"));
  app.setBaseViewsDir(join(__dirname, "..", "views"));
  app.setViewEngine("hbs");

  hbs.registerHelper("json", function (obj) {
    return JSON.stringify(obj);
  });

  const port = 3443;
  await app.listen(port);

  console.log(`Server http://localhost:${port}`);
}
bootstrap();
