import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CharacterController } from "src/controller/character.controller";
import { CharacterSchema } from "src/models/character.model";
import { CharacterService } from "src/service/character.service";

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Character', schema: CharacterSchema}])
    ],
    controllers: [CharacterController],
    providers: [CharacterService],
    exports: [CharacterService],
})
export class CharacterModule{}
