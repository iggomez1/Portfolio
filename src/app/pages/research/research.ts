import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './research.html',
  styleUrls: ['./research.scss'], // CORREGIDO: styleUrls en plural
})
export class Research {
  // --- Pestañas ---
  activeTab: 'publications' | 'events' = 'publications';

  setActiveTab(tab: 'publications' | 'events') {
    this.activeTab = tab;
  }

  // --- Slider de imágenes para el último evento ---
  eventImages: string[] = [
    'assets/images/taller_sede_1.jpeg',
    'assets/images/taller_sede_2.jpeg',
    'assets/images/taller_sede_3.jpeg',
  ];
  currentIndex: number = 0;

  get currentImage(): string {
    return this.eventImages[this.currentIndex];
  }

  prevImage() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.eventImages.length - 1;
    } else {
      this.currentIndex--;
    }
  }

  nextImage() {
    if (this.currentIndex === this.eventImages.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
  }
}
