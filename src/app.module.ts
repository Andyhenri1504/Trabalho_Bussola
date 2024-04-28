import { Module } from '@nestjs/common';
import { CharacterController } from './controller/character.controller';
import { ComicsController } from './controller/comicsbooks.controller';
import { CreatorController } from './controller/creator.controller';
import { CharacterService } from './service/character.service';
import { ComicsService } from './service/comicsbooks.service';
import { CreatorService } from './service/creator.service';

import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost./nest')  ],
  controllers: [CharacterController,ComicsController,CreatorController],
  providers: [CharacterService,ComicsService,CreatorService],
})
export class AppModule {}
