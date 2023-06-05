import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
async function register() {
  fetch('http://127.0.0.1:3001/register', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	  },
	body: JSON.stringify({
		"microservice": "data",
		"port": "3500"
	}),
  })
}
register();
bootstrap();
