import { Socket, io } from 'socket.io-client';
import { Controller, Get } from '@nestjs/common';
import { SolverResult } from './solver-results.interface';
import { SolverResultsService } from './solver-results.service';
import { PushNotification } from 'src/notifications/notifications.interface';

@Controller('solver-results')
export class SolverResultsController {
  private socket: Socket;
  constructor(private readonly solverResultsService: SolverResultsService) {
    this.socket = io(`http://127.0.0.1:${process.env.PORT ?? '3001'}`, {
      path: '/ws/notifications/',
    });
  }

  @Get()
  getResults(): SolverResult[] {
    const notification: PushNotification = {
      severity: 'warning',
      message: 'The results API was requested',
    };
    this.socket.emit('notifications', notification);
    return this.solverResultsService.getSolverResults();
  }
}
