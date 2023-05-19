import { Injectable } from '@nestjs/common';
import {
  Pagination,
  ProviderCreate,
  ProviderResponse,
  ProviderUpdate,
} from '@technical-test/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProviderEntity } from './provider.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProvidersService {
  constructor(
    @InjectRepository(ProviderEntity)
    private readonly repository: Repository<ProviderEntity>
  ) {}

  create(createProviderDto: ProviderCreate): Promise<ProviderResponse> {
    return this.repository.save(createProviderDto).then((provider) => {
      return {
        id: provider.id,
        legalName: provider.legalName,
        address: provider.address,
        name: provider.name,
      };
    });
  }

  findAll(pagination: Pagination): Promise<ProviderResponse[]> {
    return this.repository
      .find({
        take: pagination.limit,
        skip: pagination.limit * (pagination.page - 1),
      })
      .then((providers) => {
        return providers.map((provider) => {
          return {
            id: provider.id,
            legalName: provider.legalName,
            address: provider.address,
            name: provider.name,
          };
        });
      });
  }

  findOne(id: number): Promise<ProviderResponse> {
    return this.repository
      .findOne({
        where: {
          id,
        },
      })
      .then((provider) => {
        return {
          id: provider.id,
          legalName: provider.legalName,
          address: provider.address,
          name: provider.name,
        };
      });
  }

  update(
    id: number,
    updateProviderDto: ProviderUpdate
  ): Promise<ProviderResponse> {
    return this.repository
      .findOne({
        where: {
          id,
        },
      })
      .then(async (provider) => {
        const updated = await this.repository.save(
          this.repository.merge(provider, updateProviderDto)
        );
        return {
          id: updated.id,
          legalName: updated.legalName,
          address: updated.address,
          name: updated.name,
        };
      });
  }

  remove(id: number): Promise<ProviderResponse> {
    return this.repository
      .findOne({
        where: {
          id,
        },
      })
      .then((provider) => {
        return this.repository.remove(provider).then((value) => {
          return {
            id: value.id,
            legalName: value.legalName,
            address: value.address,
            name: value.name,
          };
        });
      });
  }
}
