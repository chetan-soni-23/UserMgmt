/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { UsersRepository } from 'src/repository/users.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

  constructor(
    @Inject(UsersRepository) private userRepo: UsersRepository,
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<UserDocument> {
    const createdUser = this.userRepo.create(createUserDto);
    return createdUser;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(email: string): Promise<User> {
    return this.userRepo.findOne(email);
  }

  findOneByEmail(email: string): Promise<UserDocument & User> {
    return this.userModel.findOne({email: email});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
