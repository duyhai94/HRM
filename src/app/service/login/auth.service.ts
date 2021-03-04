import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient
    ) { }

    checkGUID(data) {
        return this.http.post(`${environment.API_URL}/api/device/validate`, data).pipe(map((res: any) => res.Payload));
    }
}
