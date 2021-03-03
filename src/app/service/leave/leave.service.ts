import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { LeaveModel } from "src/app/model/leave/leave.model";
import { BaseService } from "src/app/shared/service/base.service";

@Injectable({
  providedIn: "root",
})
export class LeaveService extends BaseService<LeaveModel> {
  constructor(http: HttpClient) {
    super(http, "api/DailyEmployeeleave");
  }

  creatLeave(data: LeaveModel): Observable<any> {
    return this.http
      .post("/api/DailyEmployeeleave/username", data)
      .pipe(map((res: any) => res.Payload));
  }
}
