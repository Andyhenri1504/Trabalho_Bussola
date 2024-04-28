import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Creator } from "src/models/creator.model";

@Injectable()
export class CreatorService {
  constructor(@InjectModel(Creator.name) private readonly creatorModel: Model<Creator>) {}

  async findAll(): Promise<Creator[]> {
    return await this.creatorModel.find().exec();
  }

  async findById(id: number): Promise<Creator | null> {
    return await this.creatorModel.findById(id).exec();
  }

  async create(creator: Creator): Promise<Creator> {
    const newCreator = new this.creatorModel(creator);
    return await newCreator.save();
  }

  async update(id: number, creator: Creator): Promise<Creator | null> {
    return await this.creatorModel.findByIdAndUpdate(id, creator, { new: true });
  }

  async delete(id: number): Promise<void> {
    await this.creatorModel.findByIdAndDelete(id).exec();
  }
}