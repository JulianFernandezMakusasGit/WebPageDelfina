import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-boton-to-top',
  standalone: true,
  imports: [],
  templateUrl: './boton-to-top.component.html',
  styleUrl: './boton-to-top.component.css'
})
export class BotonToTopComponent {
  constructor(private router: Router, private viewportScroller: ViewportScroller) {}
  
  scrollToTop() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  }
}
