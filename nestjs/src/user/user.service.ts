import { BadRequestException, Injectable } from '@nestjs/common';
import { RegisterDTO } from '../Dto/register-dto.js';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema.js';
import { Model } from 'mongoose';


@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userMode: Model<User>) { }
    async createUser(registerUerDto: RegisterDTO) {

        //check existing user with same email
        const existingUser = await this.userMode.findOne({email : registerUerDto.email});

        if(existingUser) {
            throw new BadRequestException('this email already registered in System!');
        }

        return await this.userMode.create({
            name: registerUerDto.name,
            email: registerUerDto.email,
            password: registerUerDto.password,
            roles: "student"
        });
    }
}
