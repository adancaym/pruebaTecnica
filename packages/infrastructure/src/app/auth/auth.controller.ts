import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Me } from '@technical-test/common';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Get('me')
  me(): Me {
    return this.service.me();
  }
}
