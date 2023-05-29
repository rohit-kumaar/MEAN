import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}

  API = `http://localhost:8080/api`;

  postUser(data: any) {
    return this.http.post(this.API, data);
  }

  getAllUser() {
    return this.http.get(this.API);
  }
}
