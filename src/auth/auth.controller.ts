import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { Public } from 'src/common/public.decorator';
import { LoginDto } from 'src/users/dto/login.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Public()
  @Post('/signup')
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.auth.signUp(createUserDto);
  }

  @Public()
  @Post('/login')
  async login(@Body() loginBody: LoginDto) {
    return await this.auth.login(loginBody);
  }
}
