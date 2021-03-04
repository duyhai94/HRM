import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SalaryListModel } from 'src/app/model/salary/salary-list.model';

@Injectable({
  providedIn: 'root'
})
export class SalaryListService {

  constructor(protected http: HttpClient) { }

  getListSalary(month:number, year: number):Observable<SalaryListModel>{
    return this.http.get(`api/MonthlySalary/username?Month=${month}&Year=${year}`).pipe(map((payLoad: any)=> payLoad.PayLoad));
  }
  getListSalaryOfYear(year: number): Observable<SalaryListModel[]>{
    return this.http.get(`api/MonthlySalary/username?Year=${year}`).pipe(map((payLoad: any)=> payLoad.PayLoad));
  }
}
