import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-finished-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './finished-list.html',
  styleUrls: ['./finished-list.css']
})
export class FinishedListComponent {
  @Input() finishedTasks: string[] = [];
}
