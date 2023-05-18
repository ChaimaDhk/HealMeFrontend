import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //TODO : this will be changed with the real url of the backend
  USER_URL: string = "http://127.0.0.1:5001/parkingapp-af332/us-central1/";

  constructor(private httpClient: HttpClient) {
  }

  public signUp(User: any) {
    console.log("user from service");
    const requestBody = {
      name: User.name,
      surname: User.surname,
      email: User.email,
      password: User.password,
      phone: User.phone,
      role: User.role
    };
    console.log(requestBody);
    return this.httpClient.post<any>(`${this.USER_URL+'Register'}`, requestBody);
  }

  public Login(email: any, password: any) {
    console.log(email);
    console.log(password);
    const requestBody = {
      email: email,
      password: password
    }
    return this.httpClient.post<{ message: string }>(`${this.USER_URL + 'Login'}`, requestBody)
  }
}
