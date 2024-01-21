import { Component } from '@angular/core';
import { AppService } from '../../services/app.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule, FormsModule,CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  newMedicine: any = {}; // Object to hold form data
  medicines:any = [] // list of tabe;
  constructor(private medicineService: AppService) {
    this.getMedicine()
  }

  getMedicine(): void {
    this.medicineService.getMedicine().subscribe(
      (medicines) => {
        this.medicines = medicines
        console.log('Medicine list:', medicines);
      },
      (error) => {
        console.error('Error getting medicine list:', error);
      }
    );
  }
}
