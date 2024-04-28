import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CreatorController } from "src/controller/creator.controller";
import { CreatorSchema } from "src/models/creator.model";
import { CreatorService } from "src/service/creator.service";

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Creator', schema: CreatorSchema}])
        ],
        controllers: [CreatorController],
        providers: [CreatorService],
        exports: [CreatorService],
})
export class CreatorModule{}