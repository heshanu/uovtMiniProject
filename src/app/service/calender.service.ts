import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CalenderService {

  days: Date[] = [];
  currentDate = new Date();
  selectedStartDate: Date | null = null;
  selectedEndDate: Date | null = null;

  calendarForm = new FormGroup({
    startDate: new FormControl<Date | null>(null),
    endDate: new FormControl<Date | null>(null)
  });

  constructor() {
    this.generateCalendar();
  }

  generateCalendar(date: Date = new Date()) {
    this.days = [];
    const year = date.getFullYear();
    const month = date.getMonth();
    
    // Get first/last days of month
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    // Generate all days in month
    for (let day = firstDay.getDate(); day <= lastDay.getDate(); day++) {
      this.days.push(new Date(year, month, day));
    }
  }

  isSelected(date: Date): boolean {
    if (!this.selectedStartDate || !this.selectedEndDate) return false;
    return date >= this.selectedStartDate && date <= this.selectedEndDate;
  }

  isStartDate(date: Date): boolean {
    return this.selectedStartDate?.toDateString() === date.toDateString();
  }

  isEndDate(date: Date): boolean {
    return this.selectedEndDate?.toDateString() === date.toDateString();
  }

  isToday(date: Date): boolean {
    return new Date().toDateString() === date.toDateString();
  }

  selectDate(date: Date) {
    if (!this.selectedStartDate || this.selectedEndDate) {
      this.selectedStartDate = date;
      this.selectedEndDate = null;
    } else {
      this.selectedEndDate = date;
      if (this.selectedStartDate > this.selectedEndDate) {
        [this.selectedStartDate, this.selectedEndDate] = [this.selectedEndDate, this.selectedStartDate];
      }
      this.calendarForm.patchValue({
        startDate: this.selectedStartDate,
        endDate: this.selectedEndDate
      });
    }
  }

  prevMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.generateCalendar(this.currentDate);
  }

  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.generateCalendar(this.currentDate);
  }

  // Add this method to calendar.component.ts
getDayClasses(date: Date): any {
  const baseClasses = 'text-center p-2 rounded cursor-pointer transition-colors';
  const todayClass = this.isToday(date) ? 'bg-blue-100' : '';
  const selectedClass = this.isSelected(date) ? 'bg-blue-500 text-white' : '';
  const startEndClass = this.isStartDate(date) || this.isEndDate(date) ? 
    'bg-blue-600 text-white font-bold' : '';
  
  return `${baseClasses} ${todayClass} ${selectedClass} ${startEndClass} hover:bg-blue-200`;
}

}