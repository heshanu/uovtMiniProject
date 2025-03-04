import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalenderService } from '../../service/calender.service';

@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrl: './customerdetail.component.css'
})
export class CustomerdetailComponent {
  
  registrationForm!:FormGroup;

  constructor(private fb: FormBuilder,private calenderService:CalenderService) {}

  photo: File | null = null;
  photoError: string | null = null;
  days!:any;

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required]],
      address: ['', [Validators.required]],
      travelMode:['',Validators.required],
      foodList:['',Validators.required],
      foodListOption:[],
      beverageList:['',Validators.required],
      beverageListOption:[],
    });

    this.days=this.calenderService.getDayClasses;
  }


  onSubmit(): void {
    console.log(this.registrationForm.value);
    if (this.registrationForm.valid) {
      console.log('Form Submitted:', this.registrationForm.value);
      console.log(this.days);
      
      // Add your registration logic here (e.g., call a service)
    } else {
      console.log('Form is invalid');
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        this.photo = file;
        this.photoError = null;
      } else {
        this.photo = null;
        this.photoError = 'Please upload a valid image file.';
      }
    }
  }

}
