import { Component, inject, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  endDates!:any;
  startDates!:any;

  ngOnInit(): void {
    // calendarForm.value.startDate | date:'shortDate' }} - 
   // {{ calendarForm.value.endDate | date:'shortDate'
    //clerconsole.log(this.child.calendarForm.value.startDate);
    
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required]],
      address: ['', [Validators.required]],
      travelMode:['',Validators.required],
      foodList:['',Validators.required],
      foodListOption:[],
      beverageList:['',Validators.required],
      beverageListOption:[],
      startDate:['',Validators.required],
      endDate:['',Validators.required]
    });

    this.days=this.calenderService.getDayClasses;
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log('Form Submitted:', this.registrationForm.value);
      
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

  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

}
