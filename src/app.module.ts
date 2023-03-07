import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TwittsController } from './twitts/twitts.controller';
import { TwittsService } from './twitts/twitts.service';

@Module({
  imports: [],
  controllers: [AppController, TwittsController],
  providers: [AppService, TwittsService],
})
export class AppModule {}
