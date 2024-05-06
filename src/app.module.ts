import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      username: process.env.DATABASE_USER || 'public',
      password: process.env.DATABASE_PASSWORD || '123456',
      database: process.env.DATABASE_NAME || 'todo_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CqrsModule,
    TodoModule, // Import the Todo Module
  ],
})
export class AppModule {}
