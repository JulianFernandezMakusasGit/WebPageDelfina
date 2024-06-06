import { Component, NgModule, ViewChild } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar'
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { interval } from 'rxjs';

@Component({
  selector: 'app-barra-superior',
  standalone: true,
  imports: [MatToolbar, RouterModule, MatButtonModule, MatMenuModule],
  templateUrl: './barra-superior.component.html',
  styleUrl: './barra-superior.component.css'
})

export class BarraSuperiorComponent {
  title = 'ruta';

  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

  scrollTo(section: string){
    this.router.navigate([], {fragment: section});
  }

  isToolbarHidden = true;
  hideTimeout: any;

  checkMousePosition(event: MouseEvent) {
    const threshold = 100;

    if (event.clientY <= threshold) {
      this.showToolbar();
    } else {
      this.hideToolbarAfterDelay();
    }
  }

  showToolbar() {
    clearTimeout(this.hideTimeout);
    this.isToolbarHidden = false;
  }

  hideToolbarAfterDelay() {
    clearTimeout(this.hideTimeout);
    this.hideTimeout = setTimeout(() => {
      this.isToolbarHidden = true;
    }, 500);
  }


}
