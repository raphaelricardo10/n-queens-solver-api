import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

const port = Number.parseInt(process.env.NOTIFICATIONS_WS_PORT ?? '3002');

@WebSocketGateway(port, {
  cors: {
    origin: '*',
  },
})
export class NotificationsGateway {
  @WebSocketServer()
  server: Server;
  static port = port;

  @SubscribeMessage('notifications')
  listenForMessages(@MessageBody() data: string) {
    this.server.sockets.emit('notifications', data);
  }
}
