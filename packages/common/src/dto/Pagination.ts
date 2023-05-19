import { ApiProperty } from '@nestjs/swagger';

export class Pagination {
  @ApiProperty()
  page: number;
  @ApiProperty()
  limit: number;

  constructor(partial: Pagination) {
    this.page = partial.page;
    this.limit = partial.limit;
  }
}
