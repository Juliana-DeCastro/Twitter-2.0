import { Test, TestingModule } from '@nestjs/testing';
import { TwittsController } from './twitts.controller';

describe('TwittsController', () => {
  let controller: TwittsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TwittsController],
    }).compile();

    controller = module.get<TwittsController>(TwittsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
