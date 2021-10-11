import { Body, Controller, Post, Res } from '@nestjs/common';
import { RegisterService } from './register.service';
import { UserRegisterDto } from './dto/user.dto';
import { Response } from 'express';

@Controller('register')
export class RegisterController {
  constructor(private registerService: RegisterService) {}

  @Post()
  async register(@Body() body: UserRegisterDto, @Res() res: Response) {
    try {
      const result = await this.registerService.register(body);
      return res.status(200).json({
        message: 'Success user register!',
        result,
      });
    } catch (e) {
      console.log('Error: ' + e.message);
    }
  }
}
