import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Medicine } from '../models/medicine.model';
import { AppService } from '../services/app.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-Node18v';
  newMedicine: any = {}; // Object to hold form data
  medicines:any = [] // list of tabe;
  constructor(private medicineService: AppService) {
    this.getMedicine()
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
