import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsercreateService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http:HttpClient) { }

  postData(data: any){
    return this.http.post(`${this.apiUrl}/api/user/create`, data);
  }
}
