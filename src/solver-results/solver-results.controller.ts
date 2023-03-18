import { Socket, io } from 'socket.io-client';
import { Controller, Get } from '@nestjs/common';
import { SolverResult } from './solver-results.interface';
import { SolverResultsService } from './solver-results.service';
import { PushNotification } from 'src/notifications/notifications.interface';
import { NotificationsGatewayPort } from 'src/notifications/notifications.gateway';

@Controller('solver-results')
export class SolverResultsController {
  private socket: Socket;
  constructor(private readonly solverResultsService: SolverResultsService) {
    this.socket = io(`ws://127.0.0.1:${NotificationsGatewayPort}`, { path: '/ws/' });
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
