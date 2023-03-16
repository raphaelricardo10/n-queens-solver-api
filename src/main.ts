import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: 'GET',
  });
  await app.listen(Number.parseInt(process.env.PORT ?? '3001'));
}
bootstrap();
