import { Component } from '@angular/core';
import { RemoteConfigService } from '../services/remote-config.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TaskService } from '../services/task.service';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../services/category.service';
import { addIcons } from 'ionicons';
import { 
  fileTrayFull, 
  pricetagOutline, 
  add, 
  ellipsisVertical, 
  checkmarkCircle, 
  checkmarkCircleOutline, 
  create, 
  trash,
  close,
  checkmark,
  chevronDown,
  checkboxOutline,
  checkmarkDoneOutline,
  folderOpenOutline,
  happyOutline,
  addCircleOutline,
  createOutline
} from 'ionicons/icons';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule, ],
  standalone: true,
})


export class HomePage {
  tasks: any[] = [];
  newTask = '';
  showCategories = false;

  categories: any[] = [];
  selectedCategory: number | null = null;
  newCategory = '';
  showCategoryModal = false;
  editingCategory: any = null;
  categoryColorPalette = [
    '#3b82f6', '#f59e0b', '#10b981', '#f43f5e', '#8b5cf6',
    '#06b6d4', '#ec4899', '#14b8a6', '#f97316', '#6366f1',
    '#84cc16', '#d946ef', '#0ea5e9', '#fb7185', '#a855f7'
  ];
  
  expandedSections = {
    categories: true,
    pending: true,
    completed: false
  };

  constructor(
    private taskService: TaskService,
    private rc: RemoteConfigService,
    private categoryService: CategoryService,
  ) {
    addIcons({ 
      fileTrayFull, 
      pricetagOutline, 
      add, 
      ellipsisVertical, 
      checkmarkCircle, 
      checkmarkCircleOutline, 
      create, 
      trash,
      close,
      checkmark,
      chevronDown,
      checkboxOutline,
      checkmarkDoneOutline,
      folderOpenOutline,
      happyOutline,
      addCircleOutline,
      createOutline
    });
  }

  ngOnInit() {
    this.showCategories = this.rc.getFlag();
    this.loadTasks();
    this.loadCategories();
  }

  loadTasks() {
    this.tasks = this.taskService.getTasks();
  }

  loadCategories() {
    this.categories = this.categoryService.getCategories();
  }

  openCategoryModal(category?: any) {
    if (category) {
      this.editingCategory = { ...category };
    } else {
      this.editingCategory = { name: '', color: '#3b82f6' };
    }
    this.showCategoryModal = true;
  }

  closeCategoryModal() {
    this.showCategoryModal = false;
    this.editingCategory = null;
  }

  saveCategoryModal() {
    if (!this.editingCategory.name.trim()) return;
    
    if (this.editingCategory.id) {
      // Editar categoría existente
      this.categoryService.updateCategory(this.editingCategory.id, this.editingCategory.name, this.editingCategory.color);
    } else {
      // Crear nueva categoría
      this.categoryService.addCategory(this.editingCategory.name);
    }
    
    this.loadCategories();
    this.closeCategoryModal();
  }

  deleteCategory(id: number) {
    if (confirm('¿Eliminar esta categoría?')) {
      this.categoryService.deleteCategory(id);
      this.loadCategories();
    }
  }

  toggleSection(section: string) {
    this.expandedSections[section as keyof typeof this.expandedSections] = !this.expandedSections[section as keyof typeof this.expandedSections];
  }

  getCategoryName(categoryId: number): string {
    const cat = this.categories.find(c => c.id === categoryId);
    return cat ? cat.name : '';
  }

  addTask() {
    if (!this.newTask.trim()) return;

    this.taskService.addTask(this.newTask, this.selectedCategory || undefined);

    this.newTask = '';
    this.selectedCategory = null;

    this.loadTasks();
  }

  toggleTask(id: number) {
    this.taskService.toggleTask(id);
    this.loadTasks();
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
    this.loadTasks();
  }

  trackById(index: number, item: any) {
    return item.id;
  }

  get pendingTasks() { return this.tasks.filter(t => !t.completed); }
  get completedTasks() { return this.tasks.filter(t => t.completed); }

  getCategoryColor(categoryId: number): string {
    const cat = this.categoryService.getCategoryById(categoryId);
    return cat ? cat.color : '#888888';
  }

  editTask(task: any) {
    const updatedTitle = prompt('Editar tarea:', task.title);
    if (updatedTitle !== null && updatedTitle.trim() !== '') {
      task.title = updatedTitle;
      this.taskService.saveTasks(this.tasks);
      this.loadTasks();
    }
  }
}
