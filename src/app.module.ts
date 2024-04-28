import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CharacterModule } from './modules/character.module';
import { CreatorModule } from './modules/creator.module';
import { ComicsBooksModule } from './modules/comicsbooks.module';
import { CharacterController } from './controller/character.controller';
import { ComicsController } from './controller/comicsbooks.controller';
import { CreatorController } from './controller/creator.controller';
import { CharacterService } from './service/character.service';
import { ComicsService } from './service/comicsbooks.service';
import { CreatorService } from './service/creator.service';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/absoluteCarnage'),
    CharacterModule,
    CreatorModule,
    ComicsBooksModule,
   ],
  controllers: [CharacterController,
    ComicsController,
    CreatorController
  ],
  providers: [ CharacterService,
    ComicsService,
    CreatorService,
  ],
})
export class AppModule {}
