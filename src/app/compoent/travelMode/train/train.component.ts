import { Component, OnInit } from '@angular/core';
import { TrainService } from '../../../service/train.service';
import { TrainRoutesInterface } from '../../../model/trainRoutes';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrl: './train.component.css'
})
export class TrainComponent implements OnInit{
navigateTo(arg0: any) {
throw new Error('Method not implemented.');
}
  date!: any;
  trainNumber!:any;
  ScheduleDeparture!:any;
  ActualDeparture:any;
  DelayInDeparture:any;
  trainRoutes!:TrainRoutesInterface[];

  constructor(private dataService: TrainService) { }

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
}
