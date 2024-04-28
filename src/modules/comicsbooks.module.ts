import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ComicsController } from "src/controller/comicsbooks.controller";
import { ComicsBooskSchema } from "src/models/comicsbooks.model";
import { ComicsService } from "src/service/comicsbooks.service";

@Module({
    imports:[
        MongooseModule.forFeature([{name: 'Comics_Books', schema: ComicsBooskSchema}])
    ],
     controllers: [ComicsController],
     providers: [ComicsService],
     exports: [ComicsService]   
})
export class ComicsBooksModule{}