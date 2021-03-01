import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { WorkModel } from "src/app/model/work/work.model";

@Injectable({
  providedIn: "root",
})
export class WorkService {
  constructor(public http: HttpClient) {}
  getInfoWork(): Observable<WorkModel> {
    return this.http
      .get("/api/CompanyEmployee/username")
      .pipe(map((payload: any) => payload.Payload));
  }
}
