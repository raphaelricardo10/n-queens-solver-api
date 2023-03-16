import { Module } from '@nestjs/common';
import { SolverResultsService } from './solver-results.service';
import { SolverResultsController } from './solver-results.controller';

@Module({
  controllers: [SolverResultsController],
  providers: [SolverResultsService],
})
export class SolverResultsModule {}
