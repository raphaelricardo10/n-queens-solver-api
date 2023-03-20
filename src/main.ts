import { NestFactory } from '@nestjs/core';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { AppModule } from './app.module';
import { NotificationsGateway } from './notifications/notifications.gateway';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: 'GET',
  });
  app.use(
    '/ws/notifications',
    createProxyMiddleware({
      target: `http://127.0.0.1:${NotificationsGateway.port}/socket.io/`,
      changeOrigin: true,
    }),
  );
  await app.listen(Number.parseInt(process.env.PORT ?? '3001'));
}
bootstrap();
