import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects implements AfterViewInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  // ===============================
  // PROYECTOS
  // ===============================
  projects = [
      {
        id: 'proj1',
        name: 'daVinci Xi® Instrument Reprocessing System (DVX - IRS)',
        subsections: [
          { id: 'sub1', name: 'Robotic instrument - Large Needle Driver (8mm)' },
          { id: 'sub2', name: 'Gameplay' },
          { id: 'sub3', name: 'Metrics Menu' },
          { id: 'sub4', name: 'Server-side Application' },
          { id: 'sub5', name: 'Validation of the Project' }
        ]
      },
      {
        id: 'proj2',
        name: 'Full Sterilisation Cycle Simulator',
        subsections: [
          { id: 'sub6', name: 'Gameplay' }
        ]
      },
      {
        id: 'proj3',
        name: 'Mischievous Die',
        subsections: [
          { id: 'sub7', name: 'Gameplay' }
        ]
      }
  ];

  activeLink: string = '';
  private heroOffset: number = 0; // Posición inicial del hero

  // ===============================
  // SLIDER – GAME ITEMS (Proyecto 1)
  // ===============================
  gameItemImages: string[] = [
    'assets/images/DaVinci/robotic_arm_manual.png',
    'assets/images/DaVinci/robotic_arm_blender.png'
  ];
  currentImageIndex: number = 0;

  get currentImage(): string {
    return this.gameItemImages[this.currentImageIndex];
  }

  nextImage() {
    this.currentImageIndex =
      (this.currentImageIndex + 1) % this.gameItemImages.length;
  }

  prevImage() {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.gameItemImages.length) %
      this.gameItemImages.length;
  }

  serverImages: string[] = [
    'assets/images/DaVinci/user_view_1.png',
    'assets/images/DaVinci/user_view_2.png',
    'assets/images/DaVinci/user_view_3.png',
    'assets/images/DaVinci/user_view_4.png',
    'assets/images/DaVinci/user_view_5.png',
    'assets/images/DaVinci/user_view_6.png',
    'assets/images/DaVinci/user_view_7.png'
  ];

  currentServerIndex = 0;

  get currentServerImage(): string {
    return this.serverImages[this.currentServerIndex];
  }

  nextServerImage() {
    this.currentServerIndex =
      (this.currentServerIndex + 1) % this.serverImages.length;
  }

  prevServerImage() {
    this.currentServerIndex =
      (this.currentServerIndex - 1 + this.serverImages.length) %
      this.serverImages.length;
  }

  adminImages: string[] = [
  'assets/images/DaVinci/admin_view_1.png',
  'assets/images/DaVinci/admin_view_2.png',
  'assets/images/DaVinci/admin_view_3.png',
  'assets/images/DaVinci/admin_view_4.png',
  'assets/images/DaVinci/admin_view_5.png',
  'assets/images/DaVinci/admin_view_6.png',
  'assets/images/DaVinci/admin_view_7.png',
  'assets/images/DaVinci/admin_view_8.png',
  'assets/images/DaVinci/admin_view_9.png',
  'assets/images/DaVinci/admin_view_10.png',
  'assets/images/DaVinci/admin_view_11.png',
  'assets/images/DaVinci/admin_view_12.png'
];

currentAdminIndex = 0;

get currentAdminImage(): string {
  return this.adminImages[this.currentAdminIndex];
}

nextAdminImage() {
  this.currentAdminIndex =
    (this.currentAdminIndex + 1) % this.adminImages.length;
}

prevAdminImage() {
  this.currentAdminIndex =
    (this.currentAdminIndex - 1 + this.adminImages.length) %
    this.adminImages.length;
}


  // ===============================
  // CICLO DE VIDA
  // ===============================
  ngAfterViewInit() {
    // Guardamos la posición inicial del hero
    const hero = this.scrollContainer.nativeElement.querySelector('.projects-hero');
    if (hero) {
      const containerStyle = getComputedStyle(this.scrollContainer.nativeElement);
      const paddingTop = parseInt(containerStyle.paddingTop, 10) || 0;
      this.heroOffset = hero.offsetTop - paddingTop;
    }

    // Scrollspy
    this.scrollContainer.nativeElement.addEventListener('scroll', () => this.onScroll());
    this.onScroll();
  }

  // ===============================
  // SCROLLSPY
  // ===============================
  onScroll() {
    const container = this.scrollContainer.nativeElement;
    const sections = Array.from(container.querySelectorAll('.project-section, .home-section')) as HTMLElement[];
    const scrollTop = container.scrollTop;

    let currentId = '';

    // Marcamos como activa la última sección cuyo top haya pasado el scroll
    for (let i = 0; i < sections.length; i++) {
      const sec = sections[i];
      if (scrollTop >= sec.offsetTop - this.heroOffset) {
        currentId = sec.id;
      }
    }

    this.activeLink = currentId;
  }

  // ===============================
  // VERIFICAR SI UNA SECCIÓN ESTÁ ACTIVA
  // ===============================
  isActive(id: string) {
    return this.activeLink === id;
  }

  // ===============================
  // SCROLL INTERNO AL HACER CLICK EN EL ÍNDICE
  // ===============================
  scrollTo(id: string) {
    const container = this.scrollContainer.nativeElement;
    const el = container.querySelector('#' + id);
    if (el) {
      container.scrollTo({
        top: el.offsetTop - this.heroOffset,
        behavior: 'smooth'
      });
    }
  }

  selectedImage: string | null = null;

  openImage(imagePath: string) {
    this.selectedImage = imagePath;
  }

  closeImage() {
    this.selectedImage = null;
  }

}
