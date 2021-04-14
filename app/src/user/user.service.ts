import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schemas/user.schema'
import { Model } from 'mongoose';
@Injectable()
export class UserService {
    constructor(@InjectModel('User') private userModel: Model<UserDocument>) {

    }
    async getUser(name): Promise<User> {
        const list = await this.userModel.find({ name }).exec()
        if (list.length > 0) {
            return list[0]
        } else {
            return null
        }
 
    }
    async addUser(name: string): Promise<User> {
        const user = await this.userModel.findOne({ name: name }).exec();
        return user || this.userModel.create({ name, level: 0 });
    }
}
