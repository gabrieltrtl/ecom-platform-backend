import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
} from 'typeorm';
import { Order } from './order.entity';
import { Product } from '../products/product.entity';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, (order) => order.items)
  order: Order;

  @ManyToOne(() => Product)
  product: Product;

  @Column()
  quantity: number;

  @Column('decimal', { precision: 10, scale: 2 })
  unitPrice: number; // para registrar o preço na hora do pedido
}
