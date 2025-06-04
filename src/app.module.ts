import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { UsersModule } from './user/user.module';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { ProductModule } from './product/product.module';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Gt5934652+',
      database: 'ecommerce',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    UsersModule,
    ProductModule,
    OrderModule,
  ],
  controllers: [AppController, ProductController, OrderController],
  providers: [AppService, ProductService, OrderService],
})
export class AppModule {}
