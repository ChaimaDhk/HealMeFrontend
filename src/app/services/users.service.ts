import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
 USER_URL: string = "http://localhost:3000";
  
  constructor(private httpClient :HttpClient) { }
  
  public signUp(User: any){
    console.log("user from service");
    let formData =new FormData();
   formData.append('name',User.name);
   formData.append('mail',User.mail);
   formData.append('password',User.password);
   console.log(formData)
    return this.httpClient.post<{message:string}>(`${this.USER_URL + '/api/addUser'}`, formData)
 } 
}