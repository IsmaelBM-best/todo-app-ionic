import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private key = 'categories';

  // Estas son las categorías fijas con los colores de tu imagen objetivo
  private defaultCategories = [
    { id: 1, name: 'Casa', color: '#3b82f6' },      // Azul
    { id: 2, name: 'Trabajo', color: '#f59e0b' },   // Naranja
    { id: 3, name: 'Personal', color: '#10b981' },  // Verde
    { id: 4, name: 'Compras', color: '#f43f5e' },   // Rosa/Rojo
    { id: 5, name: 'Salud', color: '#8b5cf6' }      // Morado
  ];

  private predefinedColorPalette = [
    '#3b82f6', '#f59e0b', '#10b981', '#f43f5e', '#8b5cf6',
    '#06b6d4', '#ec4899', '#14b8a6', '#f97316', '#6366f1',
    '#84cc16', '#d946ef', '#0ea5e9', '#fb7185', '#a855f7'
  ];

  getCategories() {
    const saved = localStorage.getItem(this.key);
    return saved ? JSON.parse(saved) : this.defaultCategories;
  }

  getCategoryById(id: number) {
    return this.getCategories().find((c: any) => c.id === id);
  }

  addCategory(name: string) {
    if (!name.trim()) return;
    const categories = this.getCategories();
    const newId = categories.length > 0 ? Math.max(...categories.map((c: any) => c.id)) + 1 : 1;
    const color = this.predefinedColorPalette[categories.length % this.predefinedColorPalette.length];
    
    const newCategory = {
      id: newId,
      name: name.trim(),
      color: color
    };
    
    categories.push(newCategory);
    localStorage.setItem(this.key, JSON.stringify(categories));
  }

  updateCategory(id: number, name: string, color: string) {
    const categories = this.getCategories();
    const category = categories.find((c: any) => c.id === id);
    if (category) {
      category.name = name.trim();
      category.color = color;
      localStorage.setItem(this.key, JSON.stringify(categories));
    }
  }

  deleteCategory(id: number) {
    const categories = this.getCategories().filter((c: any) => c.id !== id);
    localStorage.setItem(this.key, JSON.stringify(categories));
  }
}