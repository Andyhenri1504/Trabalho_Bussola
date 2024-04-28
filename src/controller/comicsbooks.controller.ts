import { Controller, Get, Param, Post, Body, Put, Delete } from "@nestjs/common";
import { ComicsBooks } from "src/entities/comicsbooks.entity";
import { ComicsService } from "src/service/comicsbooks.service";

@Controller()
export class ComicsController{
    constructor(private readonly comicsBooksService: ComicsService){}

    @Get()
    findAll(): Promise<ComicsBooks[]>{
      return this.comicsBooksService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number): Promise<ComicsBooks | null>{
      return this.comicsBooksService.findById(id);
    }

    @Post()
    create(@Body() comicsBooks: ComicsBooks): Promise<ComicsBooks>{
      return this.comicsBooksService.create(comicsBooks);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() comicsBooks: ComicsBooks): Promise<ComicsBooks | null>{
      return this.comicsBooksService.update(id, comicsBooks);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<void>{
      return this.comicsBooksService.delete(id);
    }



}
