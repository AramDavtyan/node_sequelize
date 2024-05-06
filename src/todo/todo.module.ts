import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { Todo } from '../entity/todo.entity';
import { GetAllTodosHandler } from '../handlers/get-all-todos.handler';
import { CreateTodoHandler } from '../handlers/create-todo.handler';

@Module({
  imports: [TypeOrmModule.forFeature([Todo]), CqrsModule],
  providers: [TodoService, CreateTodoHandler, GetAllTodosHandler],
  controllers: [TodoController],
})
export class TodoModule {}