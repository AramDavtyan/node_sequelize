export class UpdateTodoCommand {
  constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly completed: boolean,
  ) {}
}
