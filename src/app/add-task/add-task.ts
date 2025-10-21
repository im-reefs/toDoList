import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule, HttpClient } from '@angular/common/http';

export interface Task{
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, MatCardModule, MatIconModule, HttpClientModule],
  templateUrl: './add-task.html',
  styleUrls: ['./add-task.css']
})
export class AddTaskComponent {
  //what is @Output decorator?
  @Output() taskAdded = new EventEmitter<Task>();
  newTask = '';

  constructor (private http: HttpClient){};

  tasks: Task[] = [];

  addTask() {

    if (this.newTask.trim()) {
      const task: Task = {
        id: Math.floor(Math.random() * (254 - 31 + 1)) + 31,
        todo: this.newTask.trim(),
        completed: false,
        userId: 1
      };

      this.tasks.push(task)

      this.taskAdded.emit(task);

      this.newTask = '';

      this.http.post('https://dummyjson.com/todos/add', task)
      .subscribe({
        next: (response) => {
          console.log('✅ Task added successfully:', response);
        },
        error: (err) => console.error('❌ Error adding task:', err)
      });


      // this.http.post('https://dummyjson.com/todos/add', newTask)
      // .subscribe({
      //   next: (response) => {
      //     console.log('✅ Task added successfully:', response);
      //     this.taskAdded.emit(this.newTask); // still update UI
      //     this.newTask = '';
      //   },
      //   error: (err) => console.error('❌ Error adding task:', err)
      // });
    }   
  }
}
