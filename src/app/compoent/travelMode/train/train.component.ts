import { Component, inject, OnInit } from '@angular/core';
import { TrainService } from '../../../service/train.service';
import { TrainRoutesInterface } from '../../../model/trainRoutes';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogTrainComponent } from '../../../shared/dialog-train/dialog-train.component';
import { DialogTrainconfirmComponent } from '../../../shared/dialog-trainconfirm/dialog-trainconfirm.component';

@Component({
    selector: 'app-train',
    templateUrl: './train.component.html',
    styleUrl: './train.component.css',
    standalone: false
})
export class TrainComponent implements OnInit{


  readonly dialog = inject(MatDialog)

  date!: any;
  trainNumber!:any;
  ScheduleDeparture!:any;
  ActualDeparture:any;
  DelayInDeparture:any;
  trainRoutes!:TrainRoutesInterface[];

  selectItem(item:any,enterAnimationDuration: string, exitAnimationDuration: string) {
     //console.log("booked ",item);
      this.dialog.open(DialogTrainconfirmComponent, {
        width: '250px',
        enterAnimationDuration,
        exitAnimationDuration,
      }); 
    }

  constructor(private dataService: TrainService,private router:Router) { }

  ngOnInit(): void {
    this.getDate();
    this.getTrainNumber();
    this.getTrainRoute();
    this.getTrainActualDeparture();
    this.getTrainDelayInDeparture();
    this.getTrainScheduleDeparture();
  }

  getDate(){
    this.dataService.getData().subscribe(
      (response:any) => {
        this.date = response.StartDate
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }

  getTrainNumber(){
    this.dataService.getData().subscribe(
      (response:any) => {
        this.trainNumber = response.TrainNumber
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }

  getTrainRoute(){
    this.dataService.getData().subscribe(
      (response:any) => {
        this.trainRoutes = response.TrainRoute
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }

  getTrainScheduleDeparture(){
    this.dataService.getData().subscribe(
      (response:any) => {
        this.ScheduleDeparture = response.TrainRoute.ScheduleDeparture  
        console.log(this.ScheduleDeparture);
        
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }

  getTrainActualDeparture(){
    this.dataService.getData().subscribe(
      (response:any) => {
        this.ActualDeparture = response.TrainRoute.ActualDeparture 
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }

  getTrainDelayInDeparture(){
    this.dataService.getData().subscribe(
      (response:any) => {
        this.DelayInDeparture = response.TrainRoute.DelayInDeparture
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }

  openPackageDialog(item: any,$event: MouseEvent) {
    $event.stopPropagation(); // Prevent card click event
      
      const dialogRef = this.dialog.open(DialogTrainconfirmComponent, {
        width: '500px',
        maxWidth: '90vw',
        data: {
          hotelName: item.name,
          packages: item.ingredients
        }
      });
  
      dialogRef.afterClosed().subscribe(selectedPackage => {
        if (selectedPackage) {
          console.log('Selected package:', selectedPackage);
          // Handle the selected package
        }
      });
    }

}
