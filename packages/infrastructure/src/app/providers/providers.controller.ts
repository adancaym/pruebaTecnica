import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProvidersService } from './providers.service';
import {
  Pagination,
  ProviderCreate,
  ProviderUpdate,
} from '@technical-test/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('providers')
@ApiTags('providers')
export class ProvidersController {
  constructor(private readonly providersService: ProvidersService) {}

  @Post()
  create(@Body() createProviderDto: ProviderCreate) {
    return this.providersService.create(createProviderDto);
  }

  @Get()
  findAll(@Query() pagination: Pagination) {
    return this.providersService.findAll(pagination);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.providersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProviderDto: ProviderUpdate) {
    return this.providersService.update(+id, updateProviderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.providersService.remove(+id);
  }
}
