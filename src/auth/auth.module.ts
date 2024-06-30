import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { UsersRepository } from 'src/repository/users.repository';
import { DatabaseModule } from 'src/database/database.module';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthController],
  providers: [AuthService, UsersService, UsersRepository, JwtService, JwtStrategy, LocalStrategy],
})
export class AuthModule {}
