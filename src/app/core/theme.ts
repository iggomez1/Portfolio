import { Injectable } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly STORAGE_KEY = 'theme';

  constructor() {
    // Escucha cambios del sistema solo si no hay tema guardado
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem(this.STORAGE_KEY)) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  /** Inicializa el tema al cargar la app */
  initTheme(): void {
    const savedTheme = localStorage.getItem(this.STORAGE_KEY) as Theme | null;

    if (savedTheme) {
      // Si el usuario ya tenía un tema guardado
      this.setTheme(savedTheme);
    } else {
      // Si no, usar la preferencia del sistema
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setTheme(prefersDark ? 'dark' : 'light');
    }
  }

  /** Aplica un tema concreto y lo guarda en localStorage */
  private setTheme(theme: Theme): void {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem(this.STORAGE_KEY, theme);
  }

  /** Devuelve el tema actual */
  getCurrentTheme(): Theme {
    return (document.body.getAttribute('data-theme') as Theme) ?? 'dark';
  }
}
