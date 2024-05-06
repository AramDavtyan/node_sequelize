import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoCommand } from '../commands/create-todo.command';
import { Todo } from '../entity/todo.entity';

@CommandHandler(CreateTodoCommand)
export class CreateTodoHandler implements ICommandHandler<CreateTodoCommand> {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  async execute(command: CreateTodoCommand): Promise<Todo> {
    const { title, completed } = command;
    const todo = this.todoRepository.create({ title, completed });
    return this.todoRepository.save(todo);
  }
}
