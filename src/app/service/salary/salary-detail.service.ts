import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SalaryDetailModel } from 'src/app/model/salary/salary-detail.model';

@Injectable({
  providedIn: 'root'
})
export class SalaryDetailService {

  constructor(protected http: HttpClient) { }

  getSalaryDetail(id): Observable<SalaryDetailModel>{
    return this.http.get(`/api/MonthlySalary/${id}`).pipe(map((payload: any)=> payload.PayLoad));
  }
}
