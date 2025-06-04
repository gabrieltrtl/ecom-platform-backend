// 🚩 Linhas adicionadas
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column()
  stock: number;
}
