import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";



@Schema()
export class Character{
    
    @Prop()
    id: number;
    
    @Prop()
    name: string;
    
    @Prop()
    fistapper: string;

    @Prop()
    filiation: string;

    @Prop()
    powers: string;
}

export const CharacterSchema = SchemaFactory.createForClass(Character);