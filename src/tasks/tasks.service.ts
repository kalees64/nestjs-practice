import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks = [];

  getTasks() {
    return this.tasks;
  }

  getTask(id: string) {
    return this.tasks.find((task) => task.id === id);
  }

  createTask(createTaskDto: CreateTaskDto) {
    const { id, title, description } = createTaskDto;
    this.tasks.push(createTaskDto);
    return createTaskDto;
  }

  updateTask(id: string, updateTaskDto: CreateTaskDto) {
    const tasks = this.tasks.map((task) =>
      task.id === id ? updateTaskDto : task,
    );
    this.tasks = tasks;
    return updateTaskDto;
  }

  deleteTask(id: string) {
    const task = this.getTask(id);
    const tasks = this.tasks.filter((task) => task.id !== id);
    this.tasks = tasks;
    return task;
  }
}
