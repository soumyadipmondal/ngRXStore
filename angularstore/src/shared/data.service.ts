import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _httpURL = "https://jsonplaceholder.typicode.com/comments";

  data: Observable<{}>;

  constructor(
    private _http:HttpClient
  ) { }

  getData = () =>{
    this.data = this._http.get(this._httpURL);
    return this.data;
  }
}
