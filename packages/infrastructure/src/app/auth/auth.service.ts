import { Injectable } from '@nestjs/common';
import { Me } from '@technical-test/common';

@Injectable()
export class AuthService {
  me(): Me {
    return {
      name: 'Bienvenido Candidato 01',
      appVersion: '1.0.0',
    };
  }
}
