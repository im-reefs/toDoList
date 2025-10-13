import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task.html',
  styleUrls: ['./add-task.css']
})
export class AddTaskComponent {
  //what is @Output decorator?
  @Output() taskAdded = new EventEmitter<string>();
  newTask = '';

  addTask() {
    if (this.newTask.trim()) {
      this.taskAdded.emit(this.newTask);
      this.newTask = '';
    }
  }
}
