import { HttpClient, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export abstract class BaseService<T> {
  private httpOptions;
  constructor(protected http: HttpClient, protected actionUrl: string) {}

  list(params?): Observable<T[]> {
    this.httpOptions = {
      params,
    };

    return this.http
      .get(`${this.actionUrl}`, this.httpOptions)
      .pipe(map((res: any) => res.Payload));
  }

  get(id: any, params?): Observable<HttpEvent<T>> {
    this.httpOptions = {
      params,
    };
    return this.http
      .get<T>(`${this.actionUrl}/${id}`, this.httpOptions)
      .pipe(map((res: any) => res.Payload));
  }

  create(data: Partial<T>, params?, headers?): Observable<HttpEvent<T>> {
    this.httpOptions = {
      params,
      headers,
    };
    return this.http.post<T>(`${this.actionUrl}`, data, this.httpOptions);
  }

  update(data: Partial<T>, id: any, params?): Observable<HttpEvent<T>> {
    this.httpOptions = {
      params,
    };
    return this.http.put<T>(`${this.actionUrl}/${id}`, data, this.httpOptions);
  }

  delete(id?: any, params?, databody?): Observable<HttpEvent<T>> {
    this.httpOptions = {
      params,
      body: databody,
    };
    return this.http.delete<T>(`${this.actionUrl}/${id}`, this.httpOptions);
  }
}
