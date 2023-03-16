import { Controller, Get } from '@nestjs/common';
import { SolverResult } from './solver-results.interface';
import { SolverResultsService } from './solver-results.service';

@Controller('solver-results')
export class SolverResultsController {
  constructor(private readonly solverResultsService: SolverResultsService) {}

  @Get()
  getResults(): SolverResult[] {
    return this.solverResultsService.getSolverResults();
  }
}
