import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { User } from '../users/user.entity';
import { OrderItem } from './order-item.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ default: 'pending' })
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';

  @ManyToOne(() => User, (user) => user.orders)
  user: User; // 🔗 Cliente que fez o pedido

  @OneToMany(() => OrderItem, (item) => item.order, { cascade: true })
  items: OrderItem[];
}
