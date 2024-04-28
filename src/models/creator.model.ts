import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Creator{
     @Prop()
     id: number;

     @Prop()
     name: string;

     @Prop()
     nacionality: string;

     @Prop()
     createdComics?: Array<string>;
}

export const CreatorSchema = SchemaFactory.createForClass(Creator);