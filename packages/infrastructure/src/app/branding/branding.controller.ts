import { Controller, Get } from '@nestjs/common';
import { Branding } from '@technical-test/common';
import { BrandingService } from './branding.service';

@Controller('branding')
export class BrandingController {
  constructor(private service: BrandingService) {}

  @Get('/')
  getBranding(): Branding {
    return this.service.getBranding();
  }
}
