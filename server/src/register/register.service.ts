import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';
import { UserRegisterDto } from './dto/user.dto';

@Injectable()
export class RegisterService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async register(body: UserRegisterDto) {
    const { firstName, lastName, password, verify, email } = body;
    const user = await new this.userModel({
      firstName,
      lastName,
      password,
      verify,
      email,
    });
    return await user.save();
  }
}
