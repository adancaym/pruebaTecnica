import { ApiProperty } from '@nestjs/swagger';

export class ProviderCreate {
  @ApiProperty({
    description: 'Provider name',
    example: 'Provider name',
  })
  name: string;

  @ApiProperty({
    description: 'Provider legal name',
    example: 'Provider legal name',
  })
  legalName: string;

  @ApiProperty({
    description: 'Provider address',
    example: 'Provider address',
  })
  address: string;

  constructor(partial: ProviderCreate) {
    this.name = partial.name;
    this.legalName = partial.legalName;
    this.address = partial.address;
  }
}
