import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

export const NotificationsGatewayPort = Number.parseInt(
  process.env.NOTIFICATIONS_WS_PORT ?? '3002',
);

@WebSocketGateway(NotificationsGatewayPort, {
  path: "/ws/",
  cors: {
    origin: '*',
  },
})
export class NotificationsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('notifications')
  listenForMessages(@MessageBody() data: string) {
    this.server.sockets.emit('notifications', data);
  }
}
