import { Module } from '@nestjs/common';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchService } from '../search/search.service';
import { SearchModule } from '../search/search.module';

@Module({
  imports: [
    // DevtoolsModule.register({
    //   http: process.env.NODE_ENV !== 'production',
    // }),
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().required(),
        ELASTICSEARCH_NODE: Joi.string().required(),
        ELASTICSEARCH_INDEX: Joi.string().required(),
      }),
    }),
    SearchModule
  ],
  controllers: [AppController],
  providers: [AppService, SearchService],

})
export class AppModule { }