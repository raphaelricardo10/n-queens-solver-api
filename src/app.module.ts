import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationsModule } from './notifications/notifications.module';
import { SolverResultsModule } from './solver-results/solver-results.module';

@Module({
  imports: [NotificationsModule, SolverResultsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
