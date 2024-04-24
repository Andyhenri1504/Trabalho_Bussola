import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { response } from 'express';
import { error } from 'console';


fetch('')
.then(response => response.json())
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error(error);
});




async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
