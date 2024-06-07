import { Component, ElementRef, Inject, ViewChild, viewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-modal',
  standalone: true,
  template: `
    <h1>{{ data.titulo }}</h1>
    <img [src]="data.imageSrc" alt="Image">
    <p id="description"></p>
  ` ,
  imports: [],
  templateUrl: './image-modal.component.html',
  styleUrl: './image-modal.component.css'
})
export class ImageModalComponent {
  @ViewChild('description', { static: true }) descriptionElement!: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<ImageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { imageSrc: string, titulo:string, description: string }
  ) {}
  ngOnInit() {
    if (this.descriptionElement && this.descriptionElement.nativeElement) {
      this.descriptionElement.nativeElement.innerHTML = this.data.description;
    }

  }
  close(): void {
    this.dialogRef.close();
  }
}
