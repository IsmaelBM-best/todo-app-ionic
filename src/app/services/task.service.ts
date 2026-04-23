import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private key = 'tasks';

  getTasks() {
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  }

  saveTasks(tasks: any[]) {
    localStorage.setItem(this.key, JSON.stringify(tasks));
  }

  addTask(title: string, categoryId?: number) {
    const tasks = this.getTasks();
    tasks.push({
        id: Date.now(),
        title,
        completed: false,
        categoryId: categoryId || null
    });
    this.saveTasks(tasks);
    }

  toggleTask(id: number) {
    const tasks = this.getTasks().map((t: any) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    this.saveTasks(tasks);
  }

  deleteTask(id: number) {
    const tasks = this.getTasks().filter((t: any) => t.id !== id);
    this.saveTasks(tasks);
  }
}