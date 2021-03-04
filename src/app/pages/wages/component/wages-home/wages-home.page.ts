
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';
import { SalaryListModel } from 'src/app/model/salary/salary-list.model';
import { SalaryListService } from 'src/app/service/salary/salary-list.service';
import { DetailEventPage } from './detail-event/detail-event.page';

@Component({
  selector: 'app-wages-home',
  templateUrl: './wages-home.page.html',
  styleUrls: ['./wages-home.page.scss'],
})
export class WagesHomePage implements OnInit {

  @ViewChild(CalendarComponent, null) myCalendar: CalendarComponent;
  constructor( public modalController: ModalController, private salaryListService: SalaryListService) { }
  eventSource = [];
  viewTitle;
  isToday:boolean;
  calendar = {
      mode: 'month',
      currentDate: new Date(),
  };
  selectedDate;
  dayDetail = false;
  detailSalary: SalaryListModel;
  currentMonth = new Date().getMonth();
  currentYear = new Date().getFullYear();
  ngOnInit() {    
    
      this.eventSource = [{
        title: 'All Day',
        startTime: new Date('01-14-2021'),
        endTime:new Date('01-14-2021'),
        allDay: true,
        type: 1
      },
      {
        title: 'All Day',
        startTime: new Date('01-14-2021'),
        endTime:new Date('01-14-2021'),
        allDay: true,
        type: 4
      },
      {
        title: 'All Day',
        startTime: new Date('01-18-2021'),
        endTime:new Date('01-18-2021'),
        allDay: true,
        type: 1
      },
      {
        title: 'All Day',
        startTime: new Date('01-15-2021'),
        endTime:new Date('01-15-2021'),
        allDay: true,
        type: 2
      },
      {
        title: 'All Day',
        startTime: new Date('01-4-2021'),
        endTime:new Date('01-4-2021'),
        allDay: true,
        type: 3
      },
      
      {
        title: 'All Day',
        startTime: new Date('01-4-2021'),
        endTime:new Date('01-4-2021'),
        allDay: true,
        type: 2
      },
      {
        title: 'All Day',
        startTime: new Date('01-4-2021'),
        endTime:new Date('01-4-2021'),
        allDay: true,
        type: 1
      },
      {
        title: 'All Day',
        startTime: new Date('01-5-2021'),
        endTime:new Date('01-5-2021'),
        allDay: true,
        type: 4
      },
    ];
  }


  getListSalary(){
    let date = new Date();
    let month = date.getMonth();
    let year = date.getFullYear();
    this.salaryListService.getListSalary(month, year).subscribe((res) => {
      this.detailSalary = res;
    })
  }

  onTimeSelected(ev) {}
  async presentModal(ev) {
    const modal = await this.modalController.create({
      component: DetailEventPage,
      cssClass: 'modalDayDetail',
      showBackdrop: true,
      backdropDismiss: true,
      componentProps: {
        data: ev
      }
    });
    return await modal.present();
  }
 
  slideNext(){
    this.myCalendar.slideNext();
  }

  slidePrev(){
    this.myCalendar.slidePrev();
  }
 
  onViewTitleChanged(title) {
      this.viewTitle = title;
  }

  changeMode(mode) {
      this.calendar.mode = mode;
  }

  today() {
      this.calendar.currentDate = new Date();
  }

  onCurrentDateChanged(event:Date) {
      var today = new Date();
      today.setHours(0, 0, 0, 0);
      event.setHours(0, 0, 0, 0);
      this.isToday = today.getTime() === event.getTime();
      this.selectedDate = event;
  }
}
