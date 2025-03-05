import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalenderService } from '../../service/calender.service';
import { CalenderComponent } from '../../shared/calender/calender.component';

@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrl: './customerdetail.component.css'
})
export class CustomerdetailComponent {

  @ViewChild(CalenderComponent) calenderChild!: CalenderComponent;
  
  registrationForm!:FormGroup;

  constructor(private fb: FormBuilder,private calenderService:CalenderService) {}

  photo: File | null = null;
  photoError: string | null = null;
  days!:any;

  endDates!:any;
  startDates!:any;

 // this.dates=this.child.startDateValue;
  parseDataToParent():void{
    this.startDates=this.calenderChild.startDateValues;
    //this.endDates= this.child.endDateValues;
    console.log(this.startDates);
    //console.log(this.endDates);
    
  }

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
