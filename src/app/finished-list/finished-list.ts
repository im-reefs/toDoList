import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-finished-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatCardModule],
  templateUrl: './finished-list.html',
  styleUrls: ['./finished-list.css']
})
export class FinishedListComponent {
  @Input() finishedTasks: string[] = [];
}
