import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { ThemeService } from './app/core/theme';

const themeService = new ThemeService();
themeService.initTheme();  // Inicializa el tema dark/light al cargar

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    // otros providers si tienes
  ]
}).catch(err => console.error(err));
