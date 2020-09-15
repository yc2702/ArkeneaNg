import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserList() {


    return this.http.get(environment.apiUrl + 'api/users')
  }

  createUser(data) {
    debugger
    return this.http.post(environment.apiUrl + 'api/user', data)
  }

  deleteUser(id) {
    debugger
    return this.http.delete(environment.apiUrl + 'api/user/' + id)
  }

  getUserDetail(id) {
    debugger
    return this.http.get(environment.apiUrl + 'api/user/' + id)
  }

  updateUser(data) {
    debugger
    return this.http.put(environment.apiUrl + 'api/user', data)
  }
}
