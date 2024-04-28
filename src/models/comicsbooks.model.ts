import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Creator, CreatorSchema } from "./creator.model";
import { Character, CharacterSchema } from "./character.model";

@Schema()
export class ComicsBooks{
    @Prop()
    id: number;

    @Prop()
    title: string;

    @Prop()
    number: number;

    @Prop()
    publicationDate: Date;

    @Prop({ type: CreatorSchema, ref: 'Creator'})
    writer: Creator;

    @Prop({ type: CreatorSchema, ref: 'Creator'})
    comicArtist: Creator;

    @Prop({ type: [CharacterSchema], ref: 'Charecter' })
    character: Array<Character>;
}

export const ComicsBooskSchema = SchemaFactory.createForClass(ComicsBooks); 