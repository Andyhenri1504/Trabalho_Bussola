import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Character } from 'src/entities/character.entity'

@Injectable()
export class CharacterService {
    constructor(
        @InjectRepository(Character)
        private characterRepository: Repository<Character>
    ) { }

    async findAll(): Promise<Character[]> {
        return this.characterRepository.find();
    }

    async findOne(id: number): Promise<Character> {
        return this.characterRepository.findOne(id);
    }

    async create(character: Character): Promise<Character> {
        return this.characterRepository.save(character);
    }

    async update(id: number, character: Character): Promise<Character> {
        await this.characterRepository.update(id, character);
        return this.characterRepository.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.characterRepository.delete(id);
    }
}
