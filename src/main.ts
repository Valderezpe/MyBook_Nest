import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaExceptionFilter } from './excepitions.filter/prisma.excecption-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new PrismaExceptionFilter());
  await app.listen(8000);
}
bootstrap();
