import { Module } from '@nestjs/common';
import { TwittsController } from './twitts.controller';
import { TwittsService } from './twitts.service';

@Module({
  controllers: [TwittsController],
  providers: [TwittsService],
})
export class TwittsModule {}
