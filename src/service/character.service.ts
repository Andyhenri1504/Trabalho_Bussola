import { Injectable } from '@nestjs/common';
import { Character } from 'src/entities/character.entity'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CharacterService {
  constructor(@InjectModel(Character.name) private readonly characterModel: Model<Character>) {}

  async findAll(): Promise<Character[]> {
    return await this.characterModel.find().exec();
  }

  async findById(id: number): Promise<Character | null> {
    return await this.characterModel.findById(id).exec();
  }

  async create(character: Character): Promise<Character> {
    const newCharacter = new this.characterModel(character);
    return await newCharacter.save();
  }

  async update(id: number, character: Character): Promise<Character | null> {
    return await this.characterModel.findByIdAndUpdate(id, character, { new: true });
  }

  async delete(id: number): Promise<void> {
    await this.characterModel.findByIdAndDelete(id).exec();
  }
}