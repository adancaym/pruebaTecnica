import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ProviderEntityInterface } from '@technical-test/common';

@Entity({ name: 'providers' })
export class ProviderEntity
  extends BaseEntity
  implements ProviderEntityInterface
{
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  legalName: string;
  @Column()
  address: string;
  @Column()
  name: string;
}
