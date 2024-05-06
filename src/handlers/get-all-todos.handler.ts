import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetAllTodosQuery } from '../queries/get-all-todos.query';
import { Todo } from '../entity/todo.entity';

@QueryHandler(GetAllTodosQuery)
export class GetAllTodosHandler implements IQueryHandler<GetAllTodosQuery> {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  async execute(): Promise<Todo[]> {
    console.log('test asdfdsf');
    return this.todoRepository.find();
  }
}