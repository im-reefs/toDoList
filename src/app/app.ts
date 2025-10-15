import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task';
import { TodoListComponent } from './todo-list/todo-list';
import { FinishedListComponent } from './finished-list/finished-list';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AddTaskComponent, TodoListComponent, FinishedListComponent, MatCardModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  todoTasks: string[] = [];
  finishedTasks: string[] = [];

  addTask(task: string) {
    if (task.trim()) this.todoTasks.push(task);
  }

  moveToFinished(index: number) {
    const task = this.todoTasks.splice(index, 1)[0];
    this.finishedTasks.push(task);
  }

  deleteTask(index: number) {
    this.todoTasks.splice(index, 1);
  }
}
