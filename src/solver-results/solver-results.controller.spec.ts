import { Test, TestingModule } from '@nestjs/testing';
import { SolverResultsService } from './solver-results.service';
import { SolverResultsController } from './solver-results.controller';

describe('SolverResultsController', () => {
  let controller: SolverResultsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SolverResultsController],
      providers: [SolverResultsService],
    }).compile();

    controller = module.get<SolverResultsController>(SolverResultsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return the solver results', () => {
    expect(controller.getResults()).toHaveLength(10);
  });
});
