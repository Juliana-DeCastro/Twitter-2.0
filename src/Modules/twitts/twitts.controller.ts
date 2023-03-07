import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  //HttpCode,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
//import { query } from 'express';

import { TwittsService } from './twitts.service';
import { Twitt } from './twitt.entity';

@Controller('twitts')
export class TwittsController {
  constructor(private readonly TwittService: TwittsService) {}

  @Get()
  getTwitts(@Query() filterQuery): Twitt[] {
    const { searchTerm, orderBy } = filterQuery;

    return this.TwittService.getTwitts();
  }

  @Get(':id') //Twitt 1
  getTwitt(@Param('id') id: string): Twitt {
    return this.TwittService.getTwitt(id);
  }

  @Post()
  //@HttpCode(204)
  createTwitt(@Body('message') message: string): void {
    return this.TwittService.createTwitt(message);
  }

  @Patch(':id')
  updateTwitt(@Param('id') id: string, @Body('message') twitt): Twitt {
    return this.TwittService.updateTwitt(id, twitt);
  }

  @Delete(':id')
  removeTwitt(@Param('id') id: string): void {
    return this.TwittService.removeTwitt(id);
  }
}
