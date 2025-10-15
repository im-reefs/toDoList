import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatButtonModule, MatIconModule],
  templateUrl: './todo-list.html',
  styleUrls: ['./todo-list.css']
})
export class TodoListComponent {
  @Input() tasks: string[] = [];
  @Output() finished = new EventEmitter<number>();
  @Output() deleted = new EventEmitter<number>();

  // ✅ Keep track of which tasks are done
  finishedIndexes = new Set<number>();

  // ✅ Called when user clicks "Done"
  onFinish(index: number) {
    this.finishedIndexes.add(index);
    this.finished.emit(index);
  }

  // ✅ Called when user clicks "Delete"
  onDelete(index: number) {
    this.deleted.emit(index);
  }
}
