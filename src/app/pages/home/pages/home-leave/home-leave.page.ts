import { Component, OnInit, ViewChild } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions, PickerColumnOption } from "@ionic/core";
@Component({
  selector: 'app-home-leave',
  templateUrl: './home-leave.page.html',
  styleUrls: ['./home-leave.page.scss'],
})
export class HomeLeavePage implements OnInit  {
  arrayDay = [];
  startTime = ['Buổi sáng','02','02','2020'];
  endTime = ['Buổi chiều','05','05','2025'];
 
  constructor( private pickerCtrl: PickerController ) {}
  ngOnInit() {
    this.dataDay();
    
  }
  async startDate(){
    let opts: PickerOptions = {
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          // cssClass: '',
        },
        {
          text: 'Done',
          handler: (value) => {
            console.log(`Got Value ${value}`);
          }
        }
      ],
      columns: [
        {
          name: 'Day',
          options: this.dataDay(),
        },
        {
          name: 'Month',
          options: this.dataMonth(),
        },
        {
          name: 'Year',
          options: this.dataYear(),
        },
        {
          name: 'Section',
          options: [
            { text: 'AM', value: '1'},
            { text: 'PM', value: '2'},
       
          ]
        }
      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let day = await picker.getColumn('Day');
      let month = await picker.getColumn('Month');
      let year = await picker.getColumn('Year');
      let section = await picker.getColumn('Section');
      let time = section.options[section.selectedIndex].value;
      let setTime = '';
      if( time == 1){
            setTime = 'Buổi sáng';
      } else {
        setTime = ' Buổi chiều';
      }
      
      this.startTime = [
        setTime,
        day.options[day.selectedIndex].value,
        month.options[day.selectedIndex].value,
        year.options[year.selectedIndex].value,
      ];
     
      
 
    });
  }
  async endDate(){
    let opts: PickerOptions = {
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          // cssClass: '',
        },
        {
          text: 'Done',
          handler: (value) => {
            console.log(`Got Value ${value}`);
          }
        }
      ],
      columns: [
        {
          name: 'Day',
          options: this.dataDay(),
        },
        {
          name: 'Month',
          options: this.dataMonth(),
        },
        {
          name: 'Year',
          options: this.dataYear(),
        },
        {
          name: 'Section',
          options: [
            { text: 'AM', value: '1'},
            { text: 'PM', value: '2'},
       
          ]
        }
      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let day = await picker.getColumn('Day');
      let month = await picker.getColumn('Month');
      let year = await picker.getColumn('Year');
      let section = await picker.getColumn('Section');
      let time = section.options[section.selectedIndex].value;
      let setTime = '';
      if( time == 1){
            setTime = 'Buổi sáng';
      } else {
        setTime = ' Buổi chiều';
      }
      
  
      this.endTime = [
        setTime,
        day.options[day.selectedIndex].value,
        month.options[day.selectedIndex].value,
        year.options[year.selectedIndex].value,
      ]
      
 
    });
  }

  // get date
  mydate = new Date();
  dataDay(): PickerColumnOption[] {
    const arrDate: PickerColumnOption[] = []
    let valueMonth = parseInt(this.startTime[2]);
    let valueYear = parseInt(this.startTime[3]);
    let day = this.daysInMonth(valueMonth,valueYear);

    console.log(day);
    
    for (let i = 1; i <= day; i++) {
      const date: PickerColumnOption = {
        text: i.toString(),
        value: i
      }
      arrDate.push(date)
    }
    return arrDate
  }
  dataMonth(): PickerColumnOption[] {
    const arrDate: PickerColumnOption[] = []
    for (let i = 1; i <=12; i++) {
      const date: PickerColumnOption = {
        text: i.toString(),
        value: i
      }
      arrDate.push(date)
    }
    return arrDate
  }
  dataYear(): PickerColumnOption[] {
    const year = this.mydate.getFullYear();
    const arrDate: PickerColumnOption[] = []
    for (let i = year; i < year + 50; i++) {
      const date: PickerColumnOption = {
        text: i.toString(),
        value: i
      }
      arrDate.push(date)
    }
    return arrDate
  }

  

  daysInMonth(month, year) {
    const myMonth = parseInt(this.startTime[2]);
    const myYear = parseInt(this.startTime[3])
    let myDay = new Date(myYear, myMonth, 0).getDate();
    // this.arrayDay = [];
    //     for(let i = 1; i <= myDay;i++){
    //       const d = i;
    //       this.arrayDay.push(d);
    //     }
        // return this.arrayDay;
        return myDay;
    }

}
