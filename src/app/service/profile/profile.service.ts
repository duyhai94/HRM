import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { ProfileModel } from "src/app/model/profile/profile.model";

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  constructor(public http: HttpClient) {}
  getDetailProfile(): Observable<ProfileModel> {
    return this.http
      .get("/api/Employee/username")
      .pipe(map((payload: any) => payload.Payload));
  }
}
