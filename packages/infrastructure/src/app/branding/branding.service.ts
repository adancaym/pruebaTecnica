import { Injectable } from '@nestjs/common';
import { Branding } from '@technical-test/common';

@Injectable()
export class BrandingService {
  getBranding(): Branding {
    return {
      logo: 'http://www.grupoasesores.com.mx/img/logo.png',
      company: 'Gapsi',
      companySystem: 'e-Commerce',
    };
  }
}
