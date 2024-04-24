import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { response } from 'express';
import { error } from 'console';


fetch('https://gateway.marvel.com:443/v1/public/characters/spiderman/events?series=absolute%20carnage&apikey=86fbe7fc1b6fc0c60e098bf7805aafd5&hash=f5189dd9147a9d727e1626157ea608f6')
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
