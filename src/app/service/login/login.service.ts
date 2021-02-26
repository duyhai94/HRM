import { HttpBackend, HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient, private handler: HttpBackend) {}

  public login(paramrs): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded",
      }),
      paramrs,
    };

    return this.http.post<any>(`${environment.API_URL}/token`, httpOptions);
    // return this.http.post<any>(
    //   `${environment.API_URL}/token`,
    //   `grant_type=password&username=${username}&password=${pwd}`,
    //   httpOptions
    // );
  }
}
