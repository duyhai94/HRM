import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  constructor(public http: HttpClient) {}
  getDetailProfile(): Observable<any> {
    return this.http
      .get("/api/Employee/username")
      .pipe(map((payload: any) => payload.Payload));
  }
}
