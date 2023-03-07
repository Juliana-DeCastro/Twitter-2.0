import { Test, TestingModule } from '@nestjs/testing';
import { TwittsService } from './twitts.service';

describe('TwittsService', () => {
  let service: TwittsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TwittsService],
    }).compile();

    service = module.get<TwittsService>(TwittsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
