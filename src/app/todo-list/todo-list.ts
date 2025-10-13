import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.html',
  styleUrls: ['./todo-list.css']
})
export class TodoListComponent {
  @Input() tasks: string[] = [];
  @Output() finished = new EventEmitter<number>();
  @Output() deleted = new EventEmitter<number>();
}
