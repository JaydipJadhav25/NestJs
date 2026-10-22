import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service.js';
import { RegisterDTO } from '../Dto/register-dto.js';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) { }

  async registerUser(registerDto: RegisterDTO) {
    const { password } = registerDto;
    if (!password || typeof password !== 'string') {
      throw new BadRequestException('Password is required');
    }
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);
      const user = await this.userService.createUser({
        ...registerDto,
        password: hash,
      });
      return { user: user, message: "user create successfully!" }

  }
}