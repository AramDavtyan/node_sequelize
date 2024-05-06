import { Controller, Post, Body, Get, Put, Param } from "@nestjs/common";
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body('title') title: string, @Body('completed') completed: boolean) {
    console.log('title', title, 'completed', completed);
    return this.todoService.createTodo(title, completed);
  }

  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('completed') completed: boolean,
  ) {
    console.log('id:', id, 'title:', title, 'completed:', completed);
    return this.todoService.updateTodo(id, title, completed);
  }
}
