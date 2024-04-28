// character.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { Character } from 'src/entities/character.entity';

import { CharacterService } from 'src/service/character.service';


@Controller()
export class CharacterController{
    constructor(private readonly characterService: CharacterService){}

    @Get()
    findAll(): Promise<Character[]>{
      return this.characterService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number): Promise<Character | null>{
      return this.characterService.findById(id);
    }

    @Post()
    create(@Body() character: Character): Promise<Character>{
      return this.characterService.create(character);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() character: Character): Promise<Character | null>{
      return this.characterService.update(id, character);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<void>{
      return this.characterService.delete(id);
    }



}
