import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ComicsBooks } from "src/models/comicsbooks.model";



@Injectable()
export class ComicsService {
  constructor(@InjectModel(ComicsBooks.name) private readonly comicsBooksModel: Model<ComicsBooks>) {}

  async findAll(): Promise<ComicsBooks[]> {
    return await this.comicsBooksModel.find().populate('writer comic_artits characters').exec();
  }

  async findById(id: number): Promise<ComicsBooks | null> {
    return await this.comicsBooksModel.findById(id).populate('writer comic_artits characters').exec();
  }

  async create(comicsbooks: ComicsBooks): Promise<ComicsBooks> {
    const newComicsBooks = new this.comicsBooksModel(comicsbooks);
    return await newComicsBooks.save();
  }

  async update(id: number, comicsbooks: ComicsBooks): Promise<ComicsBooks | null> {
    return await this.comicsBooksModel.findByIdAndUpdate(id, comicsbooks, { new: true }).populate('writer comic_artits characters');
  }

  async delete(id: number): Promise<void> {
    await this.comicsBooksModel.findByIdAndDelete(id).exec();
  }
}