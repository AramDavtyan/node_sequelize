import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateTodoCommand } from '../commands/create-todo.command';
import { GetAllTodosQuery } from '../queries/get-all-todos.query';
import { UpdateTodoCommand } from "../commands/update-todo.command";

@Injectable()
export class TodoService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async createTodo(title: string, completed: boolean) {
    return this.commandBus.execute(new CreateTodoCommand(title, completed));
  }

  async findAll() {
    return this.queryBus.execute(new GetAllTodosQuery());
  }

  async updateTodo(id: number, title: string, completed: boolean) {
    return this.commandBus.execute(new UpdateTodoCommand(id, title, completed));
  }
}
