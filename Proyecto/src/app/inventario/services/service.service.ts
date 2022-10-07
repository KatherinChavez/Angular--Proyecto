import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Comments } from '../interfaces/comments';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseUrl: string = 'https://jsonplaceholder.typicode.com'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Comments[]> {
    const url = `${this.baseUrl}/comments` 
    return this.http.get<Comments[]>(url)
  }

  getById(id: number): Observable<Comments> {
    const url = `${this.baseUrl}/comments/${id}`
    return this.http.get<Comments>(url)
  }


}
