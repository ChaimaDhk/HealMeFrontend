import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  USER_URL: string = "http://127.0.0.1:5001/parkingapp-af332/us-central1/";

  constructor(private httpClient: HttpClient) {
  }

  public getAllDoctors() {
    return this.httpClient.get<any[]>(`${this.USER_URL + '/getAllDoctors'}`);
  }

  public addDoctor(Doc: any) {
    const requestBody = {
      name: Doc.name,
      surname: Doc.surname,
      speciality: Doc.speciality,
      location: Doc.location,
      phone: Doc.phone,
      email: Doc.email,
      password: Doc.password
    };

    return this.httpClient.post<any>(`${this.USER_URL}/AddDoctor`, requestBody);
  }
  public deleteDoctor(email:any){

  }
}
