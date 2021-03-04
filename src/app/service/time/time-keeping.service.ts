import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CheckInDay } from 'src/app/model/time/check-in-day.model';
import { TimeKeepingModal } from 'src/app/model/time/timekeeping.model';

@Injectable({
  providedIn: 'root'
})
export class TimeKeepingService {

  constructor(protected http: HttpClient) { }

  getDetailTimeKeeping(month: number, year: number): Observable<TimeKeepingModal>{
    return this.http.get(`api/DailyEmployeeShift/username/report?Month=${month}&Year=${year}`).pipe(map((payLoad: any)=> payLoad.PayLoad));
  }
  getReportDate(Date: string): Observable<CheckInDay>{
    return this.http.get(`/api/DailyEmployeeShift/username?ReportDate=${Date}`).pipe(map((payLoad: any)=> payLoad.PayLoad));
  }
}
