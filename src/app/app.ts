import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task';
import { TodoListComponent } from './todo-list/todo-list';
import { FinishedListComponent } from './finished-list/finished-list';
import { MatCardModule } from '@angular/material/card';
import {Task} from './add-task/add-task'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AddTaskComponent, TodoListComponent, FinishedListComponent, MatCardModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  todoTasks: Task[] = [];
  finishedTasks: Task[] = [];

  addTask(task: any) {
    this.todoTasks.push(task); // no trim needed, since it's already structured
  }
  moveToFinished(task: Task) {

    this.todoTasks = this.todoTasks.filter(t => t !== task);
    this.finishedTasks.push({ ...task, completed: true });
    // const task = this.todoTasks[index];
    // if (!task) return;

    // // ✅ Update its status
    // const updatedTask = { ...task, completed: true };

    // // ✅ Update arrays immutably (Angular will re-render)
    // this.todoTasks = this.todoTasks.filter((_, i) => i !== index);
    // this.finishedTasks = [...this.finishedTasks, updatedTask];
  }

  deleteTask(task: Task) {
    // ✅ Create new array instead of mutating
    this.todoTasks = this.todoTasks.filter(t => t.id !== task.id);
  }

}
