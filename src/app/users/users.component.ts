import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule, FormsModule,CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  newMedicine: any = {}; // Object to hold form data
  medicines:any = [] // list of tabe;
  constructor(private medicineService: AppService) {
  }

  addMedicine(): void {
     // Access the form data from the newMedicine object
     const formData = {
      medicineName: this.newMedicine.medicineName,
      medicineCompany: this.newMedicine.medicineCompany,
      medicinePrice: this.newMedicine.medicinePrice,
      medicineQty: this.newMedicine.medicineQty,
      expiry: this.newMedicine.expiry,
      medicineImg: this.newMedicine.medicineImg,
    };

    // Log or use the form data as needed
    console.log('Form Data:', formData);

    this.medicineService.addMedicine(formData).subscribe(
      (response) => {
        console.log('Medicine added successfully:', response);
      },
      (error) => {
        console.error('Error adding medicine:', error);
      }
    );
  }


}
