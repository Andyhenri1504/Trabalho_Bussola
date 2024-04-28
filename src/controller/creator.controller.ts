import { Controller, Get, Param, Post, Body, Put, Delete } from "@nestjs/common";
import { Creator } from "src/models/creator.model";
import { CreatorService } from "src/service/creator.service";


@Controller()
export class CreatorController{
    constructor(private readonly creatorService: CreatorService){}

    @Get()
    findAll(): Promise<Creator[]>{
      return this.creatorService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number): Promise<Creator | null>{
      return this.creatorService.findById(id);
    }

    @Post()
    create(@Body() creator: Creator): Promise<Creator>{
      return this.creatorService.create(creator);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() creator: Creator): Promise<Creator | null>{
      return this.creatorService.update(id, creator);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<void>{
      return this.creatorService.delete(id);
    }



}
