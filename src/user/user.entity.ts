import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OrderedBulkOperation } from 'typeorm';
import { Product } from 'src/product/product.entity';
import { Order } from 'src/order/order.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: ['client', 'admin'],
    default: 'client',
  })
  role: 'client' | 'admin';

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

}