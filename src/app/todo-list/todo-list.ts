import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';

interface Task{
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatButtonModule, MatIconModule],
  templateUrl: './todo-list.html',
  styleUrls: ['./todo-list.css']
})
export class TodoListComponent {
  @Input() tasks: Task[] = [];
  @Output() finished = new EventEmitter<Task>();
  @Output() deleted = new EventEmitter<Task>();

  
  constructor(private http: HttpClient) {}


  // ✅ Keep track of which tasks are done
  finishedIndexes = new Set<number>();

  // ✅ Called when user clicks "Done"
  onFinish(task: Task) {
    task.completed = !task.completed;
    this.finished.emit(task);

    // 🔹 Send PATCH request to update on the mock API
    this.http.patch(`https://dummyjson.com/todos/${task.id}`, { completed: true })
      .subscribe({
        next: (response) => console.log('✅ Task updated successfully:', response),
        error: (err) => console.error('❌ Error updating task:', err)
      });
    // this.finishedIndexes.add(index);
    // this.finished.emit(index);
  }

  // ✅ Called when user clicks "Delete"
  onDelete(task: Task) {
    this.deleted.emit(task);

    // 🔹 Send DELETE request to mock API
    let taskDeleted = task;
    this.http.delete(`https://dummyjson.com/todos/${task.id}`)
      .subscribe({
        next: () => console.log('🗑️ Task deleted successfully', taskDeleted),
        error: (err) => console.error('❌ Error deleting task:', err)
      });
  }
}
