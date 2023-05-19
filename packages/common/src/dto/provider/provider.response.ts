import { ApiProperty } from '@nestjs/swagger';

export class ProviderResponse {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  legalName: string;

  @ApiProperty()
  address: string;

  constructor(partial: ProviderResponse) {
    this.id = partial.id;
    this.name = partial.name;
    this.legalName = partial.legalName;
    this.address = partial.address;
  }
}
