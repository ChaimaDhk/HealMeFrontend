import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private URL = "http://127.0.0.1:5001/parkingapp-af332/us-central1/";
  constructor(private httpClient:HttpClient) { }

  getDocs(){
    return this.httpClient.get<any[]>(this.URL+"getAllDoctors");
  }
  getusers(){
    return this.httpClient.get<any[]>(this.URL+"getAllUsers");
  }
  getrendezvous(){
    return this.httpClient.get<any[]>(this.URL+"getAllRendezVous");
  }
  deleteDoctor(docmail:any){
    return this.httpClient.delete<any>(this.URL+"deleteDoctor/"+docmail);
  }
  adddoctor(doc:any){
    console.log(doc["name"]);
    const requestBody ={
      name:doc.name,
      surname:doc.surname,
      email:doc.email,
      password:doc.password,
      phone:doc.phone,
      speciality:doc.speciality,
      location:doc.location
    };
    return this.httpClient.post<any>(this.URL+"AddDoctor",requestBody);
  }
}
