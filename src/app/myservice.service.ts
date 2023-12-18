import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

 
  constructor(private http:HttpClient) { }


  getTopjournal () {
  return  this.http.get("http://127.0.0.1:5000/api/topjournals/") ;
  }
  getByYears () {
    return  this.http.get("http://127.0.0.1:5000/api/year/") ;
    }
    getCollaborations () {
      return  this.http.get("http://127.0.0.1:5000/api/collaborationc/") ;
      }
      getTopCountries () {
        return  this.http.get("http://127.0.0.1:5000/api/countries/") ;
        }
      
}
