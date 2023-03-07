import { Module } from '@nestjs/common';
import { TwittsModule } from './modules/twitts/twitts.module';

@Module({
  imports: [TwittsModule],
})
export class AppModule {}
