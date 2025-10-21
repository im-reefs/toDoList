import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

export interface Task {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

@Component({
  selector: 'app-finished-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatCardModule],
  templateUrl: './finished-list.html',
  styleUrls: ['./finished-list.css']
})
export class FinishedListComponent implements OnInit, OnChanges {
  @Input() finishedTasks: Task[] = []; // dynamically added finished tasks
  apiFinishedTasks: Task[] = [];        // tasks from GET requests

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Generate 3 random task IDs between 1-30
    const randomIds = Array.from({ length: 3 }, () => Math.floor(Math.random() * 30) + 1);
    const urls = randomIds.map(id => `https://dummyjson.com/todos/${id}`);

    forkJoin(urls.map(url => this.http.get<Task>(url))).subscribe({
      next: (responses) => {
        // Only include tasks that are completed
        this.apiFinishedTasks = responses.filter(t => t.completed);
        console.log(responses)
      },
      error: (err) => console.error('Error fetching API tasks:', err)
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    // No changes needed for apiFinishedTasks
  }
}
